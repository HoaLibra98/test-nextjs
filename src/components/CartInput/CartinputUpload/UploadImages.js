import axiosClient from "@configs/axios";
import { Dropzone, FileMosaic, FullScreen, ImagePreview, VideoPreview } from "@files-ui/react";
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Grid, Pagination, Tab, Tabs } from '@mui/material';
import { Stack } from '@mui/system';
import { userToken } from "@slices/auth";
import { selectorSelected, selectorSelectedImages, setImageFeature, setListFolder, setSelectedImages } from "@slices/media";
import { setClose } from "@slices/popup";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import S from 'string';
import { ImageOrFileIcon } from "./CheckFileOrImage";
import Setting from "./setting";

const UploadImages = ( dataInput ) => {

    const dispatch = useDispatch();
    const token = useSelector( userToken );
    const pathServer = S( process.env.APISERVER ).replaceAll( `/${ process.env.VERSION }`, '' );

    //lấy dữ liệu về
    const [ dataFetched, setDataFetched ] = useState( false );
    const [ medias, setMedias ] = useState( [] );
    const selectedImage = useSelector( selectorSelected );
    const [ isSelected, setIsSelected ] = useState( {} );
    const selectUrl = useSelector( selectorSelectedImages );
    const [ selectedImageUrls, setSelectedImageUrls ] = useState( selectUrl || [] );

    useEffect( () => {
        if ( !dataFetched ) {
            const fetchMedias = async () => {
                const dataMedias = await axiosClient.get( '@/medias/media' );
                if ( dataMedias.success === true ) {
                    setMedias( dataMedias.data );
                }
                setDataFetched( true );
            };
            fetchMedias();
        }
    }, [ dataFetched ] );

    //phân trang
    const PER_PAGE = 15;
    let [ page, setPage ] = useState( 1 );
    const pageCount = Math.ceil( medias.length / PER_PAGE );
    const handleChangePage = ( event, newPage ) => {
        setPage( newPage );
    };
    const startIndex = ( page - 1 ) * PER_PAGE;

    const selectedData = medias.slice( startIndex, startIndex + PER_PAGE ); // dữ liệu hiển thị

    //thao tác
    const [ extFiles, setExtFiles ] = useState( [] );
    const [ imageSrc, setImageSrc ] = useState( undefined );
    const [ videoSrc, setVideoSrc ] = useState( undefined );
    const [ loadTab2Content, setLoadTab2Content ] = useState( false );

    const updateFiles = ( incommingFiles ) => {
        setExtFiles( incommingFiles );
    };
    const onDelete = ( id ) => {
        setExtFiles( extFiles.filter( ( x ) => x.id !== id ) );
    };
    const handleSee = ( imageSource ) => {
        setImageSrc( imageSource );
    };
    const handleWatch = ( videoSource ) => {
        setVideoSrc( videoSource );
    };
    const handleStart = ( filesToUpload ) => {
        // console.log( "advanced demo start upload", filesToUpload );
    };
    const handleFinish = async ( uploadedFiles ) => {
        const getFolders = await axiosClient.get( '@/medias' );
        if ( getFolders.success === true ) {
            dispatch( setListFolder( getFolders.data ) );
            // inputs.handleClick( inputs.folder );
        }
        // console.log( "advanced demo finish upload", uploadedFiles );
    };
    const handleAbort = ( id ) => {
        setExtFiles(
            extFiles.map( ( ef ) => {
                if ( ef.id === id ) {
                    return { ...ef, uploadStatus: "aborted" };
                } else return { ...ef };
            } )
        );
    };
    const handleCancel = ( id ) => {
        setExtFiles(
            extFiles.map( ( ef ) => {
                if ( ef.id === id ) {
                    return { ...ef, uploadStatus: undefined };
                } else return { ...ef };
            } )
        );
    };

    // tab panel change
    const [ value, setValue ] = useState( '1' );
    const handleChange = ( event, newValue ) => {
        setValue( newValue );
        if ( newValue === '2' ) {
            setLoadTab2Content( true );
        }
    };

    const handleItemClick = ( item ) => {
        const updatedSelected = { ...isSelected };
        updatedSelected[ item.id ] = !updatedSelected[ item.id ];
        setIsSelected( updatedSelected );

        if ( updatedSelected[ item.id ] ) {
            setSelectedImageUrls( ( prevSelectedImageUrls ) => [
                ...prevSelectedImageUrls,
                { id: dataInput.inputs.id, url: item.url },
            ] );
        } else {
            setSelectedImageUrls( ( prevSelectedImageUrls ) => [
                ...prevSelectedImageUrls.filter( ( urlObj ) => urlObj.url !== item.url ),
            ] );
        }
    };

    useEffect( () => {
        const uniqueSelectedImageUrls = selectedImageUrls.filter( ( item, index, self ) => {
            return (
                index ===
                self.findIndex( ( t ) => t.id === item.id && t.url === item.url )
            );
        } );

        dispatch( setSelectedImages( uniqueSelectedImageUrls ) );
    }, [ dispatch, selectedImageUrls ] );

    const handleShowFeatured = ( item ) => {
        if ( dataInput.inputs.id === selectedImage.generatedId ) {
            const updatedImgMediaFeature = { id: selectedImage.generatedId, url: item.url };
            dispatch( setImageFeature( updatedImgMediaFeature ) );
        }

        dispatch( setClose() );
        setLoadTab2Content( false );
    };

    return (
        <Box className="cartinput-upload-content">
            <TabContext value={ value } >
                {/* ===========header tab============ */ }
                <Tabs
                    onChange={ handleChange }
                    value={ value }
                    variant="fullWidth"
                    className="cartinput-upload-content-header"
                >
                    <Tab label="Upload file" value="1" />
                    <Tab label="Media" value="2" />
                </Tabs>
                {/*================= tab content 1 =============*/ }
                <TabPanel value="1">
                    <Dropzone
                        onChange={ updateFiles }
                        minHeight="300px"
                        value={ extFiles }
                        accept="image/*, video/*"
                        // maxFiles={ 3 }
                        // maxFileSize={ 2 * 1024 * 1024 }
                        label="Drop files here or click to browse"
                        actionButtons={ { position: "bottom", uploadButton: {}, abortButton: {} } }
                        onUploadStart={ handleStart }
                        onUploadFinish={ handleFinish }
                        // fakeUpload
                        // headerConfig={ {
                        //     deleteFiles: false
                        // } }
                        uploadConfig={ {
                            url: `${ process.env.APISERVER }/medias/uploads`,
                            method: "POST",
                            headers: {
                                'access-key': process.env.SECRET_KEY,
                                'x-access-token': token,
                                'folder-id': 0
                            },
                            autoUpload: true,
                            // cleanOnUpload: true,
                        } }
                    >
                        { extFiles.map( ( file ) => (
                            <FileMosaic
                                { ...file }
                                key={ file.id }
                                onDelete={ onDelete }
                                // onSee={ handleSee }
                                // onWatch={ handleWatch }
                                onAbort={ handleAbort }
                                onCancel={ handleCancel }
                                resultOnTooltip
                                alwaysActive
                                preview
                            />
                        ) ) }
                    </Dropzone>
                    <FullScreen open={ imageSrc !== undefined } onClose={ () => setImageSrc( undefined ) }>
                        <ImagePreview src={ imageSrc } />
                    </FullScreen>
                    <FullScreen open={ videoSrc !== undefined } onClose={ () => setVideoSrc( undefined ) } >
                        <VideoPreview src={ videoSrc } autoPlay controls />
                    </FullScreen>
                </TabPanel>
                {/*================= tab content 2 =============*/ }
                <TabPanel value="2" >
                    { loadTab2Content && (
                        <>
                            <Box className="list-image-file">
                                <Grid container spacing={ 4 } textAlign="center">
                                    { medias.map( ( item, index ) => {
                                        return (
                                            dataInput.inputs.multiple ?
                                                <Grid item xs={ 12 } sm={ 4 } md={ 2 } key={ index } >
                                                    <Box sx={ { height: "100%", border: isSelected[ item.id ] ? "2px solid green" : "2px solid transparent", cursor: "pointer", } } onClick={ () => handleItemClick( item ) }>
                                                        <ImageOrFileIcon src={ `${ pathServer }${ item.url }` } alt={ item.title } />
                                                    </Box>
                                                    <Box>
                                                        {/* ========SETTING EDIT FILE,IMAGE============ */ }
                                                        <Setting item={ item } path={ pathServer } />
                                                    </Box>
                                                </Grid>
                                                :
                                                <Grid item xs={ 12 } sm={ 4 } md={ 2 } key={ index } >
                                                    <Box sx={ { height: "100%" } } onClick={ () => handleShowFeatured( item ) }>
                                                        <ImageOrFileIcon src={ `${ pathServer }${ item.url }` } alt={ item.title } />
                                                    </Box>
                                                    <Box>
                                                        {/* ========SETTING EDIT FILE,IMAGE============ */ }
                                                        <Setting item={ item } path={ pathServer } />
                                                    </Box>
                                                </Grid>
                                        );
                                    } ) }
                                </Grid>
                            </Box>
                            {/* panagation */ }
                            <Stack spacing={ 4 } alignItems="center" marginTop={ 4 }>
                                <Pagination
                                    count={ pageCount }
                                    size="medium"
                                    variant="outlined"
                                    color="primary"
                                    shape="rounded"
                                    page={ page }
                                    onChange={ handleChangePage }
                                />
                            </Stack>
                        </>
                    ) }
                </TabPanel>
            </TabContext>
        </Box>

    );
};

export default UploadImages;