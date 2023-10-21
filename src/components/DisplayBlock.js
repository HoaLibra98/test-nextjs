import { selectorBlockFront } from '@slices/block';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function DisplayBlock( { slug, options = {}, ...props } ) {
    const blocks = useSelector( selectorBlockFront );
    const block = blocks.filter( block => block.slug === slug )[ 0 ] || false;

    // Return '' if slug or block is NULL
    if ( !slug || !block || !block.modules || block.modules.length === 0 ) return '';

    return block.modules.map( ( module, index ) => {
        const layout = module.data && module.data.layout || false;
        const DynamicModule = layout ?
            dynamic( () => import( `@modules/${ module.path }/${ layout }` ).then( ( mod ) => mod.default ), { ssr: false } ) :
            dynamic( () => import( `@modules/${ module.path }` ).then( ( mod ) => mod.default ), { ssr: false } );
        return <DynamicModule key={ `module-${ module.path }-${ index }` } module={ module } options={ options } />;
    } );
}

DisplayBlock.propTypes = {
    slug: PropTypes.string
};

export default DisplayBlock;
