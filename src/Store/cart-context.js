import React from 'react'

const CartContext = React.createContext({
    openCart: () => { },
    closeCart: () => { },
    items: [],
    totalAmount: 0,
    addToCart: item => { },
    reduceCartItemAmount: id => { },
    removeFromCart: id => { }
})

export default CartContext;