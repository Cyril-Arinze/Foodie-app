import React from 'react'

import MealItem from './MealItem'
import later from "../../assests/burger&Fries.jpg"
import classes from "./AvailableMeals.module.css"

const AvailableMeals = props => {
    const meals = [{ id: "m1", src: [later], price: 199.99, name: "American hotdog" }, { id: "m2", src: [later], price: 199.99, name: "American hotdog" }, { id: "m3", src: [later], price: 199.99, name: "American hotdog" }, { id: "m4", src: [later], price: 199.99, name: "American hotdog" }, { id: "m5", src: [later], price: 199.99, name: "American hotdog" }]
    return (
        <main className={classes.meals}>
            {meals.map(meal => {
                return <MealItem
                    key={meal.id}
                    id={meal.id}
                    src={meal.src}
                    price={meal.price}
                    name={meal.name}
                />
            })}
        </main>
    )
}

export default AvailableMeals