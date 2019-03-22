import React from 'react';
import Classnames from './googleAppsLogo.module.css';

class GoogleAppsLogo extends React.Component {

    render() {
        return (
            <div className={Classnames.rows}>
                <div>
                    <div className={Classnames.cube}/>
                    <div className={Classnames.cube}/>
                    <div className={Classnames.cube}/>
                </div>
                <div>
                    <div className={Classnames.cube}/>
                    <div className={Classnames.cube}/>
                    <div className={Classnames.cube}/>
                </div>
                <div>
                    <div className={Classnames.cube}/>
                    <div className={Classnames.cube}/>
                    <div className={Classnames.cube}/>
                </div>
            </div>
        )
    }
}

export default GoogleAppsLogo;