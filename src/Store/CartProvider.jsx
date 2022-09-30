import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM_TO_CART") {

        // check if the item to be added to the chart already exit with reference to its id
        const existingItemIndex = state.items.findIndex(item => item.id === action.itemToAdd.id)
        // get the item that is already in the cart
        const existingItem = state.items[existingItemIndex]

        let cartItems;

        if (existingItem) {
            // if the item already exist in the cart, increase its amount by one
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + 1
            }
            // set the cartItems to the current state snapshot
            cartItems = [...state.items]
            // Update the CartItem with updated Item
            cartItems[existingItemIndex] = updatedItem
        } else {
            // else if the item is not already in cart, add it to the cart.
            cartItems = state.items.concat(action.itemToAdd)
        }

        const updatedTotalAmount = state.totalAmount + action.itemToAdd.amount * action.itemToAdd.price

        return {
            items: cartItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === "REDUCE_CART_ITEM_AMOUNT") {
        let cartItems;
        const existingItemIndex = state.items.findIndex(item => item.id === action.itemToReduceId)
        const existingItem = state.items[existingItemIndex]


        if (existingItem.amount === 1) {
            cartItems = state.items.filter(item => item.id !== action.itemToReduceId)
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1
            }
            cartItems = [...state.items]
            cartItems[existingItemIndex] = updatedItem
        }


        const updatedTotalAmount = state.totalAmount - existingItem.price

        return {
            items: cartItems,
            totalAmount: updatedTotalAmount
        }

    } if (action.type === "REMOVE_ITEM_FROM_CART") {
        const existingItemIndex = state.items.findIndex(item => item.id === action.itemToRemoveId)
        const existingItem = state.items[existingItemIndex]
        const cartItems = state.items.filter(item => item.id !== action.itemToRemoveId)
        const updatedTotalAmount = state.totalAmount - existingItem.amount * existingItem.price
        return {
            items: cartItems,
            totalAmount: updatedTotalAmount
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
    const addItemToCartHandler = (item) => {
        // when this function is called it is going to dispatch an action that is managed in the cartReducer
        dispatchCartAction({ type: "ADD_ITEM_TO_CART", itemToAdd: item })
    }
    const reduceCartItemAmountHandler = (id) => {
        // when this function is called it is going to dispatch an action that is managed in the cartReducer
        dispatchCartAction({ type: "REDUCE_CART_ITEM_AMOUNT", itemToReduceId: id })
    }
    const removeFromCartHandler = (id) => {
        // when this function is called it is going to dispatch an action that is managed in the cartReducer
        dispatchCartAction({ type: "REMOVE_ITEM_FROM_CART", itemToRemoveId: id })
    }


    const cartContextValue = {
        openCart: cartOpenHandler,
        closeCart: cartCloseHandler,
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addToCart: addItemToCartHandler,
        reduceCartItemAmount: reduceCartItemAmountHandler,
        removeFromCart: removeFromCartHandler
    }
    return (

        <CartContext.Provider value={cartContextValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider