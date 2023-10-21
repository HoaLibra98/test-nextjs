import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const CakeItem = ( { textCake, isproductLeft, ...props } ) => {
    return (
        <>
            <Link href="/categories" className="link-cake">
                <Box  { ...props } >
                    <Image  { ...props } alt="special1" width={ 687 } height={ 639 } />
                </Box>
            </Link>
            { textCake !== undefined ?
                <>
                    <Link href="/categories" className="title-cake-item"><Typography variant="blog-title" >{ textCake.text }</Typography></Link>
                    <Link href="/categories"><Button variant="ButtonShop_1"><Typography variant="button">SHOP NOW</Typography></Button></Link>
                </> : "" }
        </>
    );
};

export default CakeItem;