import React from 'react';
import Classnames from './googleSearchSection.module.css';
import GoogleLogo from '../../components/googleLogo/googleLogo';
import SearchingInput from './searchingInput/searchingInput';
import ButtonDiv from './buttomDiv/buttonDiv';
import Languages from './languagesDiv/languagesDiv';


const GoogleSearchSection = () =>
    <div className={Classnames.SearchingSection}>
        <GoogleLogo />
        <SearchingInput/>
        <ButtonDiv/>
        <Languages/>
    </div>
export default GoogleSearchSection;