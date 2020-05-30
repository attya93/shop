import React from 'react';
import ReactDOM from 'react-dom';

import { CSSTransition } from 'react-transition-group';

import BackDrop from '../BackDrop/BackDrop';

import './Modal.scss';
const ModalOverlay = props => {
    const content = (
        <div className={`Model ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <from
                onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`madal__footer ${props.footerClass}`}>
                    {props.children}
                </footer>
            </from>
        </div>
    )

    return ReactDOM.createPortal(contnent, document.getElementById("modal"))
}


const Modal = (props) => {
    return (
        <>
            {props.show && <BackDrop onClick={props.onCancel} />}
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames="modal"
            >
                <ModalOverlay {...props} />
            </CSSTransition>
        </>
    )
}

export default Modal
