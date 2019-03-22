import React from 'react';
import GoogleAccount from './googleAccount/googleAccount';
import Classnames from './header.module.css';
import GoogleApps from './googleApps/googleApps';
const Header=props=> {
        const Text1 ='Google apps';
        const Text2 ='Google Account: Sourav Dey (piyush.kolkata@gmail.com)';
        return (
            <header>
                <div className={Classnames.menu}>
                    <a className={Classnames.menucontent} href='https://mail.google.com/mail/?tab=wm'>Gmail</a>
                    <a className={Classnames.menucontent} href='https://www.google.co.in/imghp?hl=en&tab=wi'>Images</a>
                    <div className={Classnames.menucontent} title={Text1} onClick={props.appsLogoClicked}><GoogleApps /></div>
                    <div className={Classnames.menucontent} title={Text2}><GoogleAccount /></div>
                </div>
            </header>
        )
    }


export default Header;