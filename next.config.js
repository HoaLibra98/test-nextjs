const path = require( 'path' );
module.exports = ( phase, { defaultConfig } ) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        /* config options here */
        // async rewrites() {

        //     const pages = await axios( `${ process.env.APISERVER }/contents/getRouters`, {
        //         params: {},
        //         headers: { 'access-key': process.env.SECRET_KEY }
        //     } );

        //     if ( pages.data.success === true && !pages.data.data.contents && !pages.data.data.categories ) return [];

        //     return [
        //         ...Object.values( pages.data.data.contents ).map( page => {
        //             return {
        //                 source: `/${ page }`,
        //                 destination: '/static/?slug=' + page,
        //             };
        //         } ),

        //         ...pages.data.data.categories.map( category => {
        //             return {
        //                 source: `/${ category.link }/${ category.slug }/:params*`,
        //                 destination: `/category?tax=${ category.link }&slug=${ category.slug }`
        //             };
        //         } )
        //     ];
        // },
        reactStrictMode: false,
        staticPageGenerationTimeout: 120,
        images:
        {
            domains: [ process.env.HTTP_DOMAIN, "hannahsweetcakes.com", "admin.hannahsweetcakes.com" ]
        },
        webpack: ( config ) => {
            config.resolve.alias[ '@components' ] = path.join( __dirname, 'src/components' );
            config.resolve.alias[ '@modules' ] = path.join( __dirname, 'src/modules' );
            return config;
        },
        env: {
            VERSION: process.env.VERSION,
            APILOCAL: process.env.APILOCAL,
            APISERVER: process.env.APISERVER,
            SECRET_KEY: process.env.SECRET_KEY,
            NEXTAUTH_URL: process.env.SECRET_KEY,
        }
    };
    return nextConfig;
};
