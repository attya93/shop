import React from 'react'
import { Link } from 'react-router-dom';

import './Button.scss';
const Button = (props) => {
    if (props.to) {
        return (
            <Link to={props.to}
                exact={props.exact}
                className={`${props.className || "btn"}`}
            >
                {props.children}
            </Link>

        )
    }
    return (
        <button className={`${props.className || "btn"}`}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >{props.children}
        </button>
    )
}

export default Button
