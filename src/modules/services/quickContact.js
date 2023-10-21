import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';

const QuickContact = ( { module, options } ) => {

    if ( options.warraper && typeof options.warraper === 'function' ) {
        return options.warraper(
            <>
                <Typography variant="subtitle6" mb={ 2 } paragraph>{ module.data.title }</Typography>
                <Box>
                    <Typography variant="title9" paragraph mb={ 1 }>Phone: { module.data.phone }</Typography>
                    <Typography variant="title9" paragraph>Email: { module.data.email }</Typography>
                </Box>
                <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={ 2 }>
                    <Link href={ module.data.buttonURL }>
                        <Button variant="primary">{ module.data.buttonLabel }</Button>
                    </Link>
                </Stack>
            </>
        );
    }

    return (
        <>
            <Typography variant="subtitle6" mb={ 2 } paragraph>{ module.data.title }</Typography>
            <Box>
                <Typography variant="title9" paragraph mb={ 1 }>Phone: { module.data.phone }</Typography>
                <Typography variant="title9" paragraph>Email: { module.data.email }</Typography>
            </Box>
            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={ 2 }>
                <Link href={ module.data.buttonURL }>
                    <Button variant="primary">{ module.data.buttonLabel }</Button>
                </Link>
            </Stack>
        </>
    );
};


export default QuickContact;
