import React, { useContext } from 'react'
import emptyCartImg from "../../assests/emptyCart.png"
import CartContext from '../../Store/cart-context'
import classes from "./EmptyCart.module.css"

const EmptyCart = () => {
    const cartCtx = useContext(CartContext)
    return (

        <div className={classes["empty-cart"]}>
            <img src={emptyCartImg} alt="Empty Cart" />
            <h3>Your cart is empty</h3>
            <p>Abeg buy food chop make hunger no finish you!</p>
            <button onClick={cartCtx.closeCart}>Start shopping</button>
        </div >

    )
}

export default EmptyCart