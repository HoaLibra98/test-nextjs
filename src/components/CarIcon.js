import * as Icon from "@phosphor-icons/react";
import PropTypes from 'prop-types';
import S from 'string';

function CarIcon( { name, ...props } ) {
    if ( !name ) return '';
    const iconName = S( name ).titleCase().camelize().s;

    const PSIcon = Icon[ iconName ];
    if ( !PSIcon ) return;
    return <PSIcon { ...props } weight="regular" />;

}

CarIcon.propTypes = {
    name: PropTypes.string,
    props: PropTypes.object
};

export default CarIcon

