import React, { useContext } from 'react'
import CartContext from '../../Store/cart-context'
import Modal from "../../UI/Modal"
import classes from "./Cart.module.css"
import CartItems from './CartItems'
import EmptyCart from './EmptyCart'
import swal from "sweetalert";

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
    const orderHandler = () => {
        swal("Oops!!!!", "Sorry, You can't order now, website is still under development", "error")
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

    const cartHasItem = cartCtx.items.length > 0

    const cartTotalAmount = (
        <div className={classes["total"]} >
            <span>Grand Total</span>
            <span>${totalAmount}</span>
        </div>
    )
    const cartButtons = (
        <div className={classes["actions"]}>
            <button className={classes["button--alt"]} onClick={cartCtx.closeCart}><i className="bi bi-x-circle"></i></button>
            <button className={classes["button"]} onClick={orderHandler} >Order</button>
        </div>
    )

    return (
        <Modal>
            <ul className={classes["cart-items"]}>
                {cartItem}
            </ul>
            {cartHasItem && cartTotalAmount}
            {cartHasItem && cartButtons}
            {!cartHasItem && <EmptyCart />}
        </Modal>
    )

}

export default Cart