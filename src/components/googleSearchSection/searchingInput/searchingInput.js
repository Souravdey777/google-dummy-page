import React from 'react';
import Classnames from './searchingInput.module.css';
import Miclogo from '../../../assets/images/Google_mic.png';


const SearchingInput = () =>
    
        <div className={Classnames.SearchingInput}>
            <input className={Classnames.textbox} maxLength="2048" type="text" autoCapitalize="off" autoComplete="off" autoCorrect="off" spellCheck="false" title="Search" />
            <div type="button" className={Classnames.mictooltip} data-toggle="tooltip" data-placement="bottom" title="Search by voice">
                <img src={Miclogo} className={Classnames.mic} alt="" />
            </div>
        </div>
export default SearchingInput;