import React, { useContext } from 'react'
import CartContext from '../../Store/cart-context'
import Button from '../../UI/Button'

import classes from "./MealItem.module.css"

const MealItem = props => {
    const cartCtx = useContext(CartContext);
    const price = props.price.toFixed(2);

    const addToCart = (evt) => {
        cartCtx.addToCart({
            name: props.name,
            src: props.src,
            amount: 1,
            price: props.price,
            id: props.id
        })

        console.log(cartCtx.items);
    }
    return (
        <div className={classes["meal-item"]}>
            <div className={classes["meal-item__image"]}>
                <img src={props.src} alt={`${props.name} pic`} />
            </div>
            <div className={classes["meal-item__desc"]}>
                <h3>{props.name}</h3>
                <p>${price}</p>
            </div>
            <div onClick={addToCart} className={classes["meal-item__actions"]}>
                <Button><i className="bi bi-cart-plus-fill"></i></Button>
            </div>
        </div>
    )
}

export default MealItem;