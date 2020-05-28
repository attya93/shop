import React from 'react'
import ReactDOM from 'react-dom';

import "./BackDrop.scss";
const BackDrop = (props) => {
    const content = (
        <div className="backDrop" onClick={props.onClick}>
        </div>
    );

    return ReactDOM.createPortal(content, document.getElementById("backDrop"));
}

export default BackDrop
