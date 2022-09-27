import React from 'react'

const Inputs = props => {
    return (
        <>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </>
    )
}
export default Inputs;