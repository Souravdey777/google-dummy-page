import React from 'react';
import Classnames from './buttonDiv.module.css';


const ButtonDiv = () =>
        <div className={Classnames.buttonDiv}>
            <button>Google Search</button>
            <a href="https://www.google.com/doodles"><button title='' >I'm Feeling Lucky</button></a>
        </div>
export default ButtonDiv;