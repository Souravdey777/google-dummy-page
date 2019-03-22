import React from 'react';
import logo from "../../assets/images/googlelogo.png";
import Classnames from './googleLogo.module.css';


const GoogleLogo =()=>
    <img src={logo} className={Classnames.logo} alt="Google" />;
export default GoogleLogo;