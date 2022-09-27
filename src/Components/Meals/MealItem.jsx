import React from 'react'
import Button from '../../UI/Button'

import classes from "./MealItem.module.css"

const MealItem = props => {
    const price = props.price.toFixed(2)
    return (
        <div className={classes["meal-item"]}>
            <div className={classes["meal-item__image"]}>
                <img src={props.src} alt={`${props.name} pic`} />
            </div>
            <div className={classes["meal-item__desc"]}>
                <h3>{props.name}</h3>
                <p>${price}</p>
            </div>
            <div className={classes["meal-item__actions"]}>
                <Button>Add to cart</Button>
            </div>
        </div>
    )
}

export default MealItem;