import React from 'react'

import classes from "./Modal.module.css"

const Modal = (props) => {
    const className = `${classes.modal} ${props.className} `
    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

export default Modal;