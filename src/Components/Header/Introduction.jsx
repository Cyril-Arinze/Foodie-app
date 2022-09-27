import React from 'react'
import classes from "./introduction.module.css"


const Introduction = props => {
    return (
        <main className={classes.intro}>
            <div className={classes["intro_desc"]}>
                <h1>Foodie app makes it easy to find and order fast food near you</h1>
                <p>Imagine you don't need a diet plan because we provide healthy and delicious food for you!! we also provide the best food delivery service </p>
            </div>
        </main>
    )
}

export default Introduction;