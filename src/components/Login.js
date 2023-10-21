import useForm from '@hooks/useForm';
import { Box, Button, FormControl, Typography } from '@mui/material';
import { setAlertOpen } from '@slices/alert';
import { setUser } from '@slices/auth';
import { ColorStyles } from '@theme/Designs';
import { login } from '@utils/auth/authentication';
import { Lock, Mail } from 'feather-icons-react/build/IconComponents';
import { getCsrfToken, getProviders } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { CarInput } from './CartInput/CartInput';

// function isValidEmail( email ) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test( email );
// }

export async function getInitialProps( context ) {
    const providers = await getProviders();
    const csrfToken = await getCsrfToken( context );

    return {
        props: {
            providers,
            csrfToken,
            title_page: "login"
        },
    };
}

const Login = ( { providers, csrfToken, setPage, isMyaccounLogin } ) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const { formRef, form, valid, handleChange, hanldeBlur } = useForm(
        { email: "", password: "" },
        { email: true, password: true, }
    );
    // const [ providers, setProviders ] = useState( "" );
    // const [ csrfToken, setCsrfToken ] = useState( "" );
    // const isAuthenticated = useAuth( true );

    // useEffect( () => {
    //     const fetchData = async () => {
    //         const fetchedProviders = await getProviders();
    //         const fetchedCsrfToken = await getCsrfToken();
    //         setProviders( fetchedProviders );
    //         setCsrfToken( fetchedCsrfToken );
    //     };
    //     fetchData();
    // }, [] );

    const handleSubmit = async ( event ) => {
        event.preventDefault();
        const data = new FormData( event.currentTarget );
        // const email = data.get( "email" );
        // const password = data.get( "password" );

        // Kiểm tra xem email có hợp lệ không;
        // if ( !isValidEmail( email ) ) {
        //     router.push( "/" );
        //     return;
        // }

        login( {
            csrfToken: data.get( "csrfToken" ),
            email: data.get( "email" ),
            password: data.get( "password" ),
        } ).then( res => {
            if ( res.res.ok === false ) {
                dispatch( setAlertOpen( { severity: 'error', message: 'Email or password not correct.' } ) );
            } else {
                if ( res.success === true ) {
                    dispatch( setUser( res.session ) );
                    router.push( router.query.next || res.session.user.redirect || '/' );
                }
            }
            //Hide loading
            // dispatch( setCloseLoading() );
        } );
    };

    return (
        <Box component="form" noValidate ref={ formRef } onSubmit={ handleSubmit } className='form-login'>
            <input name="csrfToken" type="hidden" defaultValue={ csrfToken } />
            <Typography variant='h3'>LOGIN</Typography>
            <Typography variant='description7'>Login your accounts </Typography>
            <FormControl fullWidth required={ true } className="custom-form-checkout-aguest">
                <CarInput
                    placeholder="Enter your email"
                    name="email"
                    type="email"
                    rules={ {
                        empty: "Your email not empty.",
                        email: "Your email not valid.",
                    } }
                    value={ form.email }
                    onChange={ handleChange }
                    onBlur={ hanldeBlur }
                    startAdornment={ <Mail color={ ColorStyles.Foundation.Neutral[ 700 ] } /> }
                />
            </FormControl>
            <FormControl fullWidth required={ true } className="custom-form-checkout-aguest">
                <CarInput
                    type="password"
                    placeholder="Create a password"
                    name="password"
                    rules={ {
                        empty: "Your password not empty.",
                        minLength: {
                            value: 8,
                            msg: "Must be at least 8 characters.",
                        },
                    } }
                    value={ form.password }
                    onChange={ handleChange }
                    onBlur={ hanldeBlur }
                    startAdornment={ <Lock color={ ColorStyles.Foundation.Neutral[ 700 ] } /> }
                />
            </FormControl>
            <Link href="/forgot-password" className='text-forgot-password'>
                <Typography variant="lable1">Forgot Your Password?</Typography>
            </Link>
            <Box className='btn-login'>
                <Button variant='btn-shopcart-1' type="submit" disabled={ !valid }>LOGIN</Button>
            </Box>
            <Box className='btn-checkout-sign-up'>
                <Typography variant='lable1'>{ "Don't have an account yet?" }</Typography>
                <Button variant='btn-shop-2' onClick={ () => setPage( 'signup' ) } >SIGN UP</Button>
            </Box>
            {
                isMyaccounLogin === true ? "" : <Box className='checkout-guest'>
                    <Box>
                        <Typography variant='h3'>CHECKOUT AS A GUEST</Typography>
                        <Typography variant='description7'>Process your order by filling your shipping information.</Typography>
                    </Box>
                    <Button variant='btn-shopcart-1'>ORDER</Button>
                </Box>
            }
        </Box>
    );
};

export default Login;