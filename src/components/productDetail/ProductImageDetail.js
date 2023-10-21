import CarIcon from "@components/CarIcon";
import SliderArrows from "@components/CustomSlickSlider/SliderArows";
import { API_ADMIN_URL, LoaderImage } from "@configs/constants";
import { Box, Modal } from "@mui/material";
import Image from "next/legacy/image";

import { useRef, useState } from "react";
import Slider from "react-slick";

const ProductImageDetail = ( { productDetail, isMobile } ) => {

    const [ open, setOpen ] = useState( false );
    const [ selected, setSelected ] = useState( 0 );
    const slider = useRef( null );
    const [ currentSlide, setCurrentSlide ] = useState( 0 );

    const handleOpen = () => setOpen( true );
    const handleClose = () => setOpen( false );

    const [ TempImg, setTempImg ] = useState( productDetail.thumbnail );
    const handleClickImage = ( src ) => {
        setTempImg( src );
    };
    const galleryLength = productDetail.product_images.length;

    const settings = {
        className: "slick-detail",
        dots: true,
    };

    const settingsLg = {
        dots: false,
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 100,
        infinite: false,
        afterChange: ( current ) => {
            setCurrentSlide( current );
        },
    };

    const settingsModal = {
        dots: isMobile ? true : false,
        focusOnSelect: true,
        slidesToShow: 1,
        speed: 100,
        infinite: false,
        arrows: false,
    };


    const html_renderMobile = productDetail.product_images.map( ( item, index ) => {
        if ( !item.file_name ) return;
        return (
            <Box className="product-detail-slick" key={ `product-detail-image-${ index }` } onClick={ handleOpen }>
                <Image loader={ LoaderImage } src={ `${ API_ADMIN_URL }${ item.file_name }` } alt="product-image" width={ 600 } height={ 400 } />
            </Box>
        );
    } );
    const html_product_image = productDetail.product_images.map( ( item, index ) => {
        if ( !item.file_name ) return;
        return (
            <Box className="product-detail-image" key={ `product-detail-image-${ index }` }
                onClick={ () => handleClickImage( item.file_name ) }
            >
                <Image loader={ LoaderImage } src={ `${ API_ADMIN_URL }${ item.file_name }` } alt="product-image" width={ 600 } height={ 400 } />
            </Box>
        );
    } );

    return (
        <>
            {
                isMobile === true ?
                    <Box className="slider-slick">
                        <Slider ref={ slider } { ...settings } className="slick-detail">
                            { html_renderMobile }
                        </Slider>
                    </Box>
                    :
                    <>
                        {
                            TempImg &&
                            <Box className="product-detail-image index" onClick={ handleOpen }>
                                <Image loader={ LoaderImage } src={ `${ API_ADMIN_URL }${ TempImg }` } alt="product-image" width={ 584 } height={ 400 } />
                            </Box>
                        }
                        <Box className="slider-slick">
                            <Slider ref={ slider } { ...settingsLg } className="slick-image-item">
                                { html_product_image }
                            </Slider>
                            <Box className="arows-items-white">
                                {
                                    currentSlide > 1 && (
                                        <Box className='arrow-left' onClick={ () => slider?.current?.slickPrev() }><SliderArrows arrows="left" /></Box>
                                    )
                                }
                                {
                                    currentSlide < galleryLength - settingsLg.slidesToShow && (
                                        <Box className='arrow-right' onClick={ () => slider?.current?.slickNext() }><SliderArrows arrows="right" /></Box>
                                    )
                                }
                            </Box>
                        </Box>
                    </>
            };
            <Modal
                open={ open }
                onClose={ handleClose }
            >
                <Box className="Popup-item-image-detail">
                    {/* <SvgIcon icon="check-icon" /> */ }
                    <Box className="popup-content">
                        {/* <CarIcon name='X' /> */ }
                        <Box className='popup-close' onClick={ handleClose }>
                            <CarIcon name='X' />
                        </Box>

                        <Box className="slider-slick">
                            <Slider ref={ slider } { ...settingsModal } className="slider-modal">
                                { html_product_image }
                            </Slider>

                            {
                                !isMobile && (
                                    <Box className="arrows-items-modal">
                                        <Box className='arrow-left' onClick={ () => slider?.current?.slickPrev() }><SliderArrows arrows="left" /></Box>
                                        <Box className='arrow-right' onClick={ () => slider?.current?.slickNext() }><SliderArrows arrows="right" /></Box>
                                    </Box>
                                )
                            }
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default ProductImageDetail;