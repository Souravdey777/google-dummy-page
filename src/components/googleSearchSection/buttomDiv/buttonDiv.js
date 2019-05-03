import React from 'react';
import Classnames from './buttonDiv.module.css';


const ButtonDiv = (props) =>
        <div className={Classnames.buttonDiv}>
            <button onClick={props.SearchClicked}>Google Search</button>
            <a href="https://www.google.com/doodles"><button title='' >I'm Feeling Lucky</button></a>
        </div>
export default ButtonDiv;