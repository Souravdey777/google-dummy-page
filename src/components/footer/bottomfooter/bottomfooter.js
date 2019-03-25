import React from 'react';
import Classnames from './bottomfooter.module.css';

const BottomFooter = (props) =>
    (<div className={Classnames.rows}>
        <div className={Classnames.bottomleft}>
            <a className={Classnames.text} href="https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a>
            <a className={Classnames.text} href="https://www.google.co.in/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none">Business</a>
            <a className={Classnames.text} href="https://about.google/intl/en_in/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
        </div>
        <div className={Classnames.bottomright}>
            <a className={Classnames.text} href="https://policies.google.com/privacy?hl=en&gl=in">Privacy</a>
            <a className={Classnames.text} href="https://policies.google.com/terms?hl=en&gl=in">Terms</a>
            <div className={Classnames.text} onClick={props.clicked}>Settings</div>

        </div>
        <div className={Classnames.bottomrightSecondary}>
            <div className={Classnames.text} onClick={props.clicked}>Settings</div>
            <a className={Classnames.text} href="https://policies.google.com/privacy?hl=en&gl=in">Privacy</a>
            <a className={Classnames.text} href="https://policies.google.com/terms?hl=en&gl=in">Terms</a>


        </div>
    </div>
    );
export default BottomFooter;