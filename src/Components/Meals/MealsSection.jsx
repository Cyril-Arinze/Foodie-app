import React from 'react'
import AvailableMeals from './AvailableMeals'
import MealHeader from './MealHeader'

function MealsSection() {
    return (
        <section>
            <MealHeader />
            <AvailableMeals />
        </section>
    )
}

export default MealsSection