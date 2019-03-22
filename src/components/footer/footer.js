import React from 'react';
import Classnames from './footer.module.css';
import TopFooter from './topfooter/topfooter';
import BottomFooter from './bottomfooter/bottomfooter';
const Footer = (props) =>(
<footer className={Classnames.footer}>
<TopFooter />
<BottomFooter clicked={props.clicked}/>
</footer>
);
export default Footer;