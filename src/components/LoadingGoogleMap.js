import { Box, Typography } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import GoogleMapReact from 'google-map-react';

const MyMarker = ( { icon, title, address, email, sdt } ) => {

    return (
        <Box className="my-marker">
            <FeatherIcon icon={ icon } size="30" fill={ ColorStyles.Foundation.Danger[ 700 ] } />
            <Box className="my-marker-item">
                <Typography variant='h4'>{ title }</Typography>
                <Typography variant='description'>{ address }</Typography>
                <Typography variant='description'>{ email }</Typography>
                <Typography variant='description'>{ sdt }</Typography>
            </Box>
        </Box>
    );
};

const LoadingGoogleMap = ( { points } ) => {

    return (
        <Box sx={ { width: '100%', height: '100%' } } className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={ { key: "" } }
                defaultCenter={ { lat: 12.26320, lng: 109.16290 } }
                defaultZoom={ 15 }
            >
                <MyMarker
                    icon="map-pin"
                    title={ points.title }
                    address={ points.address }
                    email={ points.email }
                    sdt={ points.sdt }
                />
            </GoogleMapReact>
        </Box>
    );
};

export default LoadingGoogleMap;