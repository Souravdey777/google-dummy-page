import React from 'react';
import Classnames from './googleAppsModal.module.css';
import Backdrop from '../../../footer/bottomfooter/backdrop/Backdrop';
import Aux from '../../../../hoc/Aux';
import Userlogo from '../../../../assets/images/user.jpg';
import Searchlogo from '../../../../assets/images/favicon.png';
import Maplogo from '../../../../assets/images/maps.png';
import Youtubelogo from '../../../../assets/images/youtube.png';
import PlayStorelogo from '../../../../assets/images/playstore.png';
import GoogleNewslogo from '../../../../assets/images/googleNews.png';
import Gmailogo from '../../../../assets/images/gmail.png';
import Contactslogo from '../../../../assets/images/contacts.png';
import Drivelogo from '../../../../assets/images/drive.png';
import Calendarlogo from '../../../../assets/images/calendar.png';
import Googlepluslogo from '../../../../assets/images/googleplus.png';
import GoogleTranslatelogo from '../../../../assets/images/GoogleTranslate.png';
import GooglePhotoslogo from '../../../../assets/images/photos.ico';

const GoogleAppsModal = props => {
    return (
        <Aux>
            <div className={Classnames.modal}>
                <div className={Classnames.padded}>
                    <div className={Classnames.row}>
                        <a href='/#'><img src={Userlogo} className={Classnames.Userlogo} alt="Google Account" />Account</a>
                        <a href='/#'><img src={Searchlogo} className={Classnames.Userlogo} alt="Search" />Search</a>
                        <a href='https://www.google.co.in/maps?hl=en&tab=wl'><img src={Maplogo} className={Classnames.img} alt="Maps" />Maps</a>
                    </div>
                    <div className={Classnames.row}>
                        <a href='https://www.youtube.com/'><img src={Youtubelogo} className={Classnames.img} alt="YouTube" />YouTube</a>
                        <a href='https://play.google.com/'><img src={PlayStorelogo} className={Classnames.img} alt="Play Store" />Play</a>
                        <a href='https://news.google.com/'><img src={GoogleNewslogo} className={Classnames.img} alt="Google News" />News</a>
                    </div>
                    <div className={Classnames.row}>
                        <a href='https://mail.google.com/mail/'><img src={Gmailogo} className={Classnames.img} alt="Gmail" />Gmail</a>
                        <a href='https://contacts.google.com/'><img src={Contactslogo} className={Classnames.img} alt="Contacts" />Contacts</a>
                        <a href='https://drive.google.com/'><img src={Drivelogo} className={Classnames.img} alt="Drive" />Drive</a>
                    </div>
                    <div className={Classnames.row}>
                        <a href='https://calendar.google.com/calendar/'><img src={Calendarlogo} className={Classnames.img} alt="Calendar" />Calendar</a>
                        <a href='https://plus.google.com/'><img src={Googlepluslogo} className={Classnames.img} alt="Google+" />Google+</a>
                        <a href='https://translate.google.co.in/'><img src={GoogleTranslatelogo} className={Classnames.img} alt="Translate" />Translate</a>
                    </div><div className={Classnames.row}>
                        <a href='https://photos.google.com/'><img src={GooglePhotoslogo} className={Classnames.img} alt="Photos" />Photos</a>
                    </div>
                </div>
                <div className={Classnames.more}>
                    More
                </div>
            </div>
            <Backdrop clicked={props.appsLogoClicked} show={props.showApps} />
        </Aux>
    )
}

export default GoogleAppsModal;