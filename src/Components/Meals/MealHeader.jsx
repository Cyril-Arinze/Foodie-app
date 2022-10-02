import React from 'react'

import classes from "./MealHeader.module.css"

function MealHeader(props) {
    const filterChangeHandler = (evt) => {
        const filterValue = evt.target.value
        props.OnFilterMeal(filterValue)
    }

    return (
        <header className={classes["meal-header"]}>
            <div>
                <h2>Today's Meal😋</h2>
            </div>
            <div>
                <select value={props.selected} onChange={filterChangeHandler}>
                    <option value="">Filter by Category</option>
                    <option value="All">All</option>
                    <option value="Burger">Burger</option>
                    <option value="Bread">Bread</option>
                    <option value="Shawarma">Shawarma</option>
                    <option value="Drink">Drinks</option>
                    <option value="Fries">Fries</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Pizza">Pizza</option>
                    <option value="hot dog">Hot Dog</option>
                </select>
            </div>
        </header>
    )
}

export default MealHeader