import React from 'react'

const Button = (props) => {
    return (
        <button {...props.input}>{props.children}</button>
    )
}

export default Button