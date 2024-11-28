import React from 'react';
import img from '../../../../assets/form_logo.png';
import '../FormHeader/Header.css';

const Header = ({goback}: any) => {

    
    return (
    <header>
        <img className= "header" src={img} alt="Ubank" onClick={goback} />
    </header>
    );
};

export default Header;
