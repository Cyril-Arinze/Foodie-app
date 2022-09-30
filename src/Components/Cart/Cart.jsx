import React, { useContext } from 'react'
import CartContext from '../../Store/cart-context'
import Modal from "../../UI/Modal"
import classes from "./Cart.module.css"
import CartItems from './CartItems'

function Cart(props) {

    const cartCtx = useContext(CartContext)

    const removeItemHandler = (id) => {
        cartCtx.reduceCartItemAmount(id)
    }
    const addItemHandler = (item) => {
        cartCtx.addToCart({ ...item, amount: 1 })
    }
    const reduceItemHandler = (id) => {
        cartCtx.removeFromCart(id)
    }
    const totalAmount = cartCtx.totalAmount.toFixed(2)


    const cartItem = cartCtx.items.map(item => {
        return (
            <CartItems
                key={item.id}
                name={item.name}
                src={item.src}
                amount={item.amount}
                price={item.amount * item.price}
                reduceItem={removeItemHandler.bind(null, item.id)}
                addItem={addItemHandler.bind(null, item)}
                removeItem={reduceItemHandler.bind(null, item.id)}
            />
        )
    })

    return (
        <Modal onClick={cartCtx.closeCart}>
            <ul className={classes["cart-items"]}>
                {cartItem}
            </ul>
            <div className={classes["total"]} >
                <span>Total</span>
                <span>${totalAmount}</span>
            </div>
            <div className={classes["actions"]}>
                <button className={classes["button--alt"]} onClick={cartCtx.closeCart}>Close</button>
                <button className={classes["button"]} >Order</button>
            </div>
        </Modal>
    )

}

export default Cart