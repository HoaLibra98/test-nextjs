import Logo from '@assets/images/logos/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const LogoIcon = () => {
    return (
        <Link href='/' passHref className='logo'>
            <Image src={ Logo } alt='Logo' priority />
        </Link>
    );
};

export default LogoIcon;

