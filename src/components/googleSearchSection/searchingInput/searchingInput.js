import React from 'react';
import Classnames from './searchingInput.module.css';
import Miclogo from '../../../assets/images/Google_mic.png';


class SearchingInput extends React.Component {
    render() {
        return (
            <div className={Classnames.SearchingInput}>
                <input value={this.props.value} onKeyPress={this.props.keyPressed} onChange={this.props.handleChange} className={Classnames.textbox} maxLength="2048" type="text" autoCapitalize="off" autoComplete="off" autoCorrect="off" spellCheck="false" title="Search" />
                <div type="button" className={Classnames.mictooltip} data-toggle="tooltip" data-placement="bottom" title="Search by voice">
                    <img src={Miclogo} className={Classnames.mic} alt="" />
                </div>
            </div>
        )
    }
}
export default SearchingInput;