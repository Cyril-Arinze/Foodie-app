import React, { useState } from 'react'

import MealItem from './MealItem'
import burgerBeef1 from "../../assests/Bugger&Beef1.jpg"
import burgerBeef2 from "../../assests/Bugger&Beef2.jpg"
import burgerBeef3 from "../../assests/Bugger&Beef3.jpg"
import burgerFries from "../../assests/burger&Fries.jpg"
import chickenVegs from "../../assests/chicken&Vegetable.jpg"
import FriedChicken1 from "../../assests/Fried_Chicken1.jpg"
import FriedChicken2 from "../../assests/Fried-Chicken2.jpg"
import Coke1 from "../../assests/coke_drink.jpg"
import Coke2 from "../../assests/Coke-drink2.jpg"
import redBull from "../../assests/RedBull_Drink.jpg"
import monster from "../../assests/Monster_drink.jpg"
import Fries from "../../assests/Fries.jpg"
import Fries1 from "../../assests/Fries1.png"
import Fries2 from "../../assests/Fries2.jpg"
import hotDog1 from "../../assests/hot-dog.jpg"
import hotDog2 from "../../assests/Hotdog1.jpg"
import hotDog3 from "../../assests/Hotdog3.jpg"
import classes from "./AvailableMeals.module.css"

const dummy_meals = [
    {
        id: "m1",
        tag: "Burger",
        src: burgerBeef1,
        price: 199.99,
        name: "American hotdog American hotdog American hotdog"
    },
    {
        id: "m2",
        tag: "Burger",
        src: [burgerBeef2],
        price: 199.99,
        name: "American hotdog"
    },
    {
        id: "m3",
        tag: "Burger",
        src: [burgerBeef3],
        price: 199.99,
        name: "American hotdog"
    },
    {
        id: "m4",
        tag: "Burger",
        src: [burgerFries],
        price: 199.99,
        name: "American hotdog"
    },
    {
        id: "m5",
        tag: "Chicken",
        src: [chickenVegs],
        price: 199.99,
        name: "American hotdog"
    },
    {
        id: "m6",
        tag: "Chicken",
        src: [FriedChicken1],
        price: 199.99,
        name: "American hotdog"
    },
    {
        id: "m7",
        tag: "Chicken",
        src: [FriedChicken2],
        price: 199.99,
        name: "American hotdog"
    },
    {
        id: "m8",
        tag: "Drink",
        src: [Coke1],
        price: 199.99,
        name: "American hotdog"
    },
    {
        id: "m9",
        tag: "Drink",
        src: [Coke2],
        price: 199.99,
        name: "American hotdog"
    },
    {
        id: "m10",
        tag: "Drink",
        src: [redBull],
        price: 199.99,
        name: "American hotdog"
    },
    {
        id: "m11",
        tag: "Drink",
        src: [monster],
        price: 199.99,
        name: "American hotdog"
    },
    {
        id: "m12",
        tag: "Fries",
        src: [Fries],
        price: 199.99,
        name: "American hotdog"
    },
    {
        id: "m13",
        tag: "Fries",
        src: [Fries1],
        price: 199.99,
        name: "American hotdog"
    },
    {
        id: "m14",
        tag: "Fries",
        src: [Fries2],
        price: 199.99,
        name: "American hotdog"
    },
    {
        id: "m15",
        tag: "hot dog",
        src: [hotDog1],
        price: 199.99,
        name: "American hotdog"
    },
    {
        id: "m16",
        tag: "hot dog",
        src: [hotDog2],
        price: 199.99,
        name: "American hotdog"
    },
    {
        id: "m17",
        tag: "hot dog",
        src: [hotDog3],
        price: 199.99,
        name: "American hotdog"
    },
]


const AvailableMeals = props => {
    const [meals, setMeals] = useState(dummy_meals)
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