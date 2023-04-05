import React from 'react';
// Redux
import { useSelector } from 'react-redux';

const Input = ({ type, placeholder }) => {
    const isDarkMode = useSelector((state) => state.mode.darkMode);

    return (
        <input type={type} placeholder={placeholder} className={`${ isDarkMode ? "bg__dark" : "" }`} />
    );
}

export default Input;
