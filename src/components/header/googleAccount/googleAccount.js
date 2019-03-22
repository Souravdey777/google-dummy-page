import React from 'react';
import Classnames from './googleAccount.module.css';
import Userlogo from '../../../assets/images/user.jpg';

class GoogleAccount extends React.Component {

    render() {
        return (
            <div>
                <img src={Userlogo} className={Classnames.Userlogo} alt="GoogleAccount" />
            </div>
        )
    }
}

export default GoogleAccount;