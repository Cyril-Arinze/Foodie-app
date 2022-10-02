import React, { useState } from 'react'

import MealItem from './MealItem'
import BakedChicken from "../../assests/BakedChicken.jpg"
import burgerBeef2 from "../../assests/Bugger&Beef2.jpg"
import burgerBeef3 from "../../assests/Bugger&Beef3.jpg"
import burgerFries from "../../assests/burger&Fries.jpg"
import chickenVegs from "../../assests/chicken&Vegetable.jpg"
import FriedChicken1 from "../../assests/Fried_Chicken1.jpg"
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
import seafoodPizza from "../../assests/seafood-pizza.jpg"
import pizza1 from "../../assests/Pizza1.png"
import italianPizza from "../../assests/italian-pizza.jpg"
import pizza2 from "../../assests/pizza_.png"
import pizzaSlice from "../../assests/Pizza-Slice.png"
import classes from "./AvailableMeals.module.css"
import MealHeader from './MealHeader'

const dummy_meals = [
    {
        id: "m4",
        tag: "Burger",
        src: [burgerFries],
        price: 50.99,
        name: "Veg. Burger and Fries"
    },
    {
        id: "m1",
        tag: "Pizza",
        src: pizzaSlice,
        price: 2.99,
        name: "A slice of pizza"
    },

    {
        id: "m3",
        tag: "Burger",
        src: [burgerBeef3],
        price: 38.99,
        name: "Chimichurri Burger"
    },

    {
        id: "m5",
        tag: "Chicken",
        src: [chickenVegs],
        price: 29.99,
        name: "Chicken wings + Vegs."
    },
    {
        id: "m9",
        tag: "Drink",
        src: [Coke2],
        price: 4.99,
        name: "Canned Coca-cola"
    },
    {
        id: "m6",
        tag: "Chicken",
        src: [FriedChicken1],
        price: 19.99,
        name: "Fried Chicken"
    },
    {
        id: "m7",
        tag: "Chicken",
        src: BakedChicken,
        price: 99.99,
        name: "Baked Chicken"
    },
    {
        id: "m8",
        tag: "Drink",
        src: [Coke1],
        price: 5.99,
        name: "Plastic Coca-Cola"
    },
    {
        id: "m20",
        tag: "Pizza",
        src: pizza1,
        price: 19.99,
        name: "Kubie Pizza"
    },
    {
        id: "m14",
        tag: "Fries",
        src: [Fries2],
        price: 20.99,
        name: "French Fries"
    },
    {
        id: "m11",
        tag: "Drink",
        src: [monster],
        price: 199.99,
        name: "Monster Energy Drink"
    },
    {
        id: "m2",
        tag: "Burger",
        src: [burgerBeef2],
        price: 49.99,
        name: "Cheese Burger"
    },
    {
        id: "m12",
        tag: "Fries",
        src: [Fries],
        price: 9.99,
        name: "French Fries"
    },
    {
        id: "m10",
        tag: "Drink",
        src: [redBull],
        price: 9.99,
        name: "Red Bull Energy Drink"
    },
    {
        id: "m13",
        tag: "Fries",
        src: [Fries1],
        price: 12.99,
        name: "French Fries"
    },

    {
        id: "m21",
        tag: "Pizza",
        src: italianPizza,
        price: 49.99,
        name: "italian Pizza"
    },

    {
        id: "m16",
        tag: "hot dog",
        src: [hotDog2],
        price: 10.99,
        name: "Dodger Hotdog"
    },
    {
        id: "m17",
        tag: "hot dog",
        src: [hotDog3],
        price: 9.99,
        name: "American Hotdog"
    },
    {
        id: "m18",
        tag: "Pizza",
        src: seafoodPizza,
        price: 59.99,
        name: "SeaFood Pizza"
    },
    {
        id: "m19",
        tag: "Pizza",
        src: pizza2,
        price: 10.99,
        name: "Nigerian Pizza"
    },


    {
        id: "m22",
        tag: "Drink",
        src: "https://ik.imagekit.io/oz87xfgij/storeImg/tr:w-240/milk-shake__UwPlZkUiSo.png",
        price: 49.99,
        name: "Milkshake"
    },
    {
        id: "m15",
        tag: "hot dog",
        src: [hotDog1],
        price: 18.99,
        name: "Dixie Hotdog"
    },

]


const AvailableMeals = props => {
    const [mealsFilter, setMealsFilter] = useState("")

    const filterMealHandler = (mealTag) => {
        setMealsFilter(mealTag)
    }

    let filteredMeal = dummy_meals.filter(meal => meal.tag.includes(mealsFilter))

    if (mealsFilter === "All") {
        filteredMeal = dummy_meals
    }

    const AvailableMeals = filteredMeal.length


    return (
        <>
            <MealHeader selected={mealsFilter} OnFilterMeal={filterMealHandler} />
            <main className={classes.meals}>
                {filteredMeal.map(meal => {
                    return <MealItem
                        key={meal.id}
                        id={meal.id}
                        src={meal.src}
                        price={meal.price}
                        name={meal.name}
                    />
                })}
            </main>
            {AvailableMeals === 0 && <h1 style={{ textAlign: "center" }}>No available meal for this category</h1>}
        </>
    )
}

export default AvailableMeals