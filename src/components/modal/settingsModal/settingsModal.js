import React from 'react';
import Classnames from './settingsModal.module.css';
const SettingsModal = () => {
    return (
        <div className={Classnames.modal}>
            <a href='https://www.google.com/preferences?hl=en-IN&fg=1'>Search settings</a>
            <a href='https://www.google.com/advanced_search?hl=en-IN&fg=1'>Advanced search</a>
            <a href='https://myactivity.google.com/privacyadvisor/search?utm_source=googlemenu&fg=1'>Your data in Search</a>
            <a href='https://myactivity.google.com/item?restrict=search&utm_source=google&hl=en-IN&fg=1'>History</a>
            <a href='https://support.google.com/websearch/?p=ws_results_help&hl=en-IN&fg=1'>Search Help</a>
            <a href='https://www.google.com/#'>Send feedback</a>
        </div>
    )
}

export default SettingsModal;