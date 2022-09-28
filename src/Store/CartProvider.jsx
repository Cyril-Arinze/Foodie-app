import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM_TO_CART") {
        let updatedItems = state.items.concat(action.itemToAdd)
        return {
            items: updatedItems,
            totalAmount: 0
        }
    }
    return defaultCartState;
}

const CartProvider = props => {

    //Managing Cart state using UseReducer
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const cartOpenHandler = () => {
        // when this function is called the cartIsOpen state in App component is going to be set to true  
        props.setCartIsOpen(true)
    }
    const cartCloseHandler = () => {
        // when this function is called the cartIsOpen state in App component is going to be set to true  
        props.setCartIsOpen(false)

    }
    const addItemToCart = (item) => {
        // when this function is called it is going to dispatch an action that is managed in the cartReducer
        dispatchCartAction({ type: "ADD_ITEM_TO_CART", itemToAdd: item })
    }
    const removeItemFromCart = (id) => {
        // when this function is called it is going to dispatch an action that is managed in the cartReducer
        dispatchCartAction({ type: "REMOVE_ITEM_TO_CART", itemToRemoveId: id })
    }


    const cartContextValue = {
        openCart: cartOpenHandler,
        closeCart: cartCloseHandler,
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addToCart: addItemToCart,
        removeFromCart: removeItemFromCart
    }
    return (

        <CartContext.Provider value={cartContextValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider