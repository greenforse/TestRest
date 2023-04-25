import React, {useState} from "react";
import PropTypes from 'prop-types';
//import classNames from 'classnames';

const buttonL = ({
    children, onClick, /*className,*/ disabled, active,
}) => {
    /*const classes = classNames (
        'btn',
        className,
        {active},
    );*/

    return (
        <button
        //className = {classes}
        disabled = {disabled}
        onClick = {onClick}
        >{children}</button>
    );
};

 /*   buttonL.propTypes = {
        children : PropTypes.node,
        onClick : PropTypes.func,
        className : PropTypes.string,
        disabled : PropTypes.bool,
        active : PropTypes.bool,
    };

    buttonL.defaultProps = {
        children : 'кукареку',
        onClick : () => {},
        className : '',
        disabled : false ,
        active : false ,
    };
*/
export default buttonL