import React from 'react';
import Classnames from './buttonDiv.module.css';


const ButtonDiv = (props) =>
        <div className={Classnames.buttonDiv}>
            <a href={props.url}><button>Google Search</button></a>
            <a href="https://www.google.com/doodles"><button title='' >I'm Feeling Lucky</button></a>
        </div>
export default ButtonDiv;