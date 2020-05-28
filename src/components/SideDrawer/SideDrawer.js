import React from 'react'
import ReactDOM from 'react-dom';

import './SideDrawer.scss';
const SideDrawer = (props) => {
    const content = (
        <aside className="aside-drawer">
            {props.children}
        </aside>
    );

    return ReactDOM.createPortal(content, document.getElementById("drawer"))
}

export default SideDrawer
