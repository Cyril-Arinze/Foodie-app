import React from 'react'
import Greeting from './Greeting';
import Introduction from './Introduction';
import classes from "./PageSummary.module.css"


const PageSummary = props => {

    return (
        <section className={classes.main}>
            <Greeting />
            <Introduction />
        </section>
    )
}

export default PageSummary