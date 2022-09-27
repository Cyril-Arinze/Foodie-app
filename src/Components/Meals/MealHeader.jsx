import React from 'react'

import classes from "./MealHeader.module.css"

function MealHeader() {

    return (
        <header className={classes["meal-header"]}>
            <div>
                <h2>Todays Meal😋😋</h2>
            </div>
            <div>
                filter
            </div>
        </header>
    )
}

export default MealHeader