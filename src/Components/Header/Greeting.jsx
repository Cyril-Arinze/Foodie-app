import React from 'react';
import classes from "./Greeting.module.css"

const Greeting = props => {
    let greeting;

    const time = new Date().getHours()

    if (time < 12) {
        greeting = "Good morning"
    } else if (time >= 12 && time < 16) {
        greeting = "Good Afternoon"
    }
    else {
        greeting = "Good Evening"
    }

    return (
        <header className={classes.greeting}>
            <span className={classes["greeting_time"]}>{greeting}!!</span>
            <span className={classes["greeting_welcome"]}>Welcome to Foodie App</span>
        </header>
    );
}
export default Greeting;