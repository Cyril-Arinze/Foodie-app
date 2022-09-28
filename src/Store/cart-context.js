import React from 'react'

const CartContext = React.createContext({
    openCart: () => { },
    closeCart: () => { },
    items: [],
    addToCart: item => { },
    removeFromCart: id => { }
})

export default CartContext;