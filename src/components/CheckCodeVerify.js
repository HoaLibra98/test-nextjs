import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { ColorStyles } from '@theme/Designs';
import { ChevronLeft } from 'feather-icons-react/build/IconComponents';
import dynamic from 'next/dynamic';
const ReactCodeInput = dynamic( import( 'react-code-input' ) );

const CheckCodeVerify = ( { setPage } ) => {

    return (
        <Box className="check-code-verify-input">
            <Typography variant="h3">EMAIL VERIFICATION</Typography>
            <Typography variant="description8">Please type the verification code sent To: hana@gmail.com <span>CHANGE</span></Typography>
            <Box className="check-code-input">
                <Stack direction="column" spacing={ 1 }>
                    <Typography variant="lable3">Enter the 6 digit code</Typography>
                    <ReactCodeInput className="check-code-verify" fields={ 6 } />
                </Stack>
                <Typography variant="description9">{ "Didn't receive the code?" } <span>{ "Resend verification code" }</span></Typography>
            </Box>
            <Box className="button-next-prev">
                <Button onClick={ () => setPage( "signup" ) } variant="default" startIcon={ <ChevronLeft color={ ColorStyles.Foundation.baseColor.black } strokeWidth="1px" /> }>
                    <Typography variant="body5">BLACK</Typography>
                </Button>
                <Button variant="btn-shopcart-1" >
                    <Typography variant="lable4">NEXT</Typography>
                </Button>
            </Box>
        </Box >
    );
};

export default CheckCodeVerify;
