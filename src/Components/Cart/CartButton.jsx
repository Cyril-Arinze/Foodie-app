import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import CartContext from '../../Store/cart-context'

import classes from "./CartButton.module.css"


function CartBtn() {
    const cartCtx = useContext(CartContext)

    // Calculate Number of items in Cart
    const numberOfItemInCart = cartCtx.items.reduce((CurNum, item) => {
        return (CurNum + item.amount)
    }, 0)
    // Check if the number of item in cart is greater than 0
    const cartHasItem = numberOfItemInCart > 0 // cart-btn__badge will only render if this true

    return (
        <div onClick={cartCtx.openCart} className={classes["cart-btn"]}>
            <div className={classes["cart-btn__inner"]}>
                {cartHasItem && <span className={classes["cart-btn__badge"]}>{numberOfItemInCart}</span>}
                <i className=" bi bi-cart4"></i>
            </div>
        </div>
    );
}


const CartButton = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<CartBtn />, document.getElementById("CartBtn"))}
        </>
    )
}

export default CartButton