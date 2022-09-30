import React from 'react'

import classes from "./CartItems.module.css"

const CartItems = props => {
    const price = props.price.toFixed(2)

    return (
        <li className={classes["cart-item"]}>
            <div className={classes["cart-item__img"]}>
                <img src={props.src} alt={props.name} />
            </div>
            <div className={classes["cart-item__desc"]}>
                <div>
                    <h4>{props.name}</h4>
                    <div>
                        <button onClick={props.addItem}>+</button>
                        <span>x{props.amount}</span>
                        <button onClick={props.reduceItem}>-</button>
                    </div>
                </div>
                <span>
                    <h5>${price}</h5>
                </span>
            </div>
            <div onClick={props.removeItem} className={classes["cart-item__remove"]}>
                <i className="bi bi-x-circle"></i>
            </div>
        </li>
    )
}

export default CartItems