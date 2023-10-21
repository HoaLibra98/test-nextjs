import { Box, Container, Typography, experimentalStyled, useMediaQuery } from "@mui/material";
import { TextStyles } from "@theme/Designs";
import Link from "next/link";
import { useRouter } from "next/router";

const ModuleRelatedPage = experimentalStyled( Box )( ( { theme } ) => ( {
    padding: '64px 0',
    borderTop: '1px solid #667185',
    '.MuiBox-root': {
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        '.MuiBox-root': {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 16,
            a: {
                backgroundColor: '#E6F6ED',
                padding: '10px 16px',
                borderRadius: 100,
                p: {
                    ...TextStyles.textSm.normal,
                    color: '#02A04B',
                },
                '&:hover': {
                    p: {
                        color: '#B4D524',
                    },
                }
            },
            '.is-active': {
                p: {
                    color: '#B4D524',
                }
            }
        }
    }
} ) );


const RelatedPage = ( { module, options } ) => {
    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );
    const router = useRouter();

    let related = [
        {
            url: '/',
            page: 'Homepage',
            isActive: false
        },
    ];

    if ( router.query.tax && router.query.tax === 'dealership-services' && router.query.slug && router.query.slug === 'social-media-marketing' ) {

        if ( router.query.slug && router.query.slug === 'social-media-marketing' ) {
            related = [
                {
                    url: '/',
                    page: 'Homepage',
                    isActive: false
                },
                {
                    url: '/dealership-services/social-media-marketing',
                    page: 'Social Media Marketing',
                    isActive: true
                },
                {
                    url: '/social-branding-solutions',
                    page: 'Social Branding Solution',
                    isActive: false
                },
                {
                    url: '/social-channel-monitoring-management',
                    page: 'Social Channel Monitoring & Management',
                    isActive: false
                },
                {
                    url: '/social-advertising-management',
                    page: 'Social Advertising Management',
                    isActive: false
                }
            ];
        }
    } else {
        if ( router.query.slug && router.query.slug === 'social-branding-solutions' ) {
            related = [
                {
                    url: '/',
                    page: 'Homepage',
                    isActive: false
                },
                {
                    url: '/dealership-services/social-media-marketing',
                    page: 'Social Media Marketing',
                    isActive: false
                },
                {
                    url: '/social-branding-solutions',
                    page: 'Social Branding Solution',
                    isActive: true
                },
                {
                    url: '/social-channel-monitoring-management',
                    page: 'Social Channel Monitoring & Management',
                    isActive: false
                },
                {
                    url: '/social-advertising-management',
                    page: 'Social Advertising Management',
                    isActive: false
                }
            ];
        } else if ( router.query.slug && router.query.slug === 'social-channel-monitoring-management' ) {
            related = [
                {
                    url: '/',
                    page: 'Homepage',
                    isActive: false
                },
                {
                    url: '/dealership-services/social-media-marketing',
                    page: 'Social Media Marketing',
                    isActive: false
                },
                {
                    url: '/social-branding-solutions',
                    page: 'Social Branding Solution',
                    isActive: false
                },
                {
                    url: '/social-channel-monitoring-management',
                    page: 'Social Channel Monitoring & Management',
                    isActive: true
                },
                {
                    url: '/social-advertising-management',
                    page: 'Social Advertising Management',
                    isActive: false
                }
            ];
        } else if ( router.query.slug && router.query.slug === 'social-advertising-management' ) {
            related = [
                {
                    url: '/',
                    page: 'Homepage',
                    isActive: false
                },
                {
                    url: '/dealership-services/social-media-marketing',
                    page: 'Social Media Marketing',
                    isActive: false
                },
                {
                    url: '/social-branding-solutions',
                    page: 'Social Branding Solution',
                    isActive: false
                },
                {
                    url: '/social-channel-monitoring-management',
                    page: 'Social Channel Monitoring & Management',
                    isActive: false
                },
                {
                    url: '/social-advertising-management',
                    page: 'Social Advertising Management',
                    isActive: true
                }
            ];
        }
    }

    // console.log( 'router:', router.query );

    // const relatedPages = [
    //     {
    //         url: '#',
    //         page: 'Homepage',
    //         isActive: false
    //     },
    //     {
    //         url: '#',
    //         page: 'Social Media Marketing',
    //         isActive: false
    //     },
    //     {
    //         url: '#',
    //         page: 'Social Branding Solution',
    //         isActive: true
    //     },
    //     {
    //         url: '#',
    //         page: 'Social Channel Monitoring & Management',
    //         isActive: false
    //     },
    //     {
    //         url: '#',
    //         page: 'Social Advertising Management',
    //         isActive: false
    //     }
    // ];

    return (
        <ModuleRelatedPage>
            <Container>
                <Box>
                    <Typography variant='text13'>Discover more Social Media Marketing ideas to boost your business:</Typography>
                    <Box>
                        {
                            related.map( ( relatedPage, index ) => (
                                <Link key={ `related-page-${ index }` } href={ relatedPage.url } className={ relatedPage.isActive === true ? "is-active" : "" }>
                                    <Typography>{ relatedPage.page }</Typography>
                                </Link>
                            ) )
                        }
                    </Box>
                </Box>
            </Container>
        </ModuleRelatedPage>
    );
};

export default RelatedPage;