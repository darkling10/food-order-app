import classes from './HeaderCartButton.module.css'

import React from 'react'

const HeaderCartButton = (props) => {
    return (
       
            <button className={classes.button}>{props.children}</button>
        
    )
}

export default HeaderCartButton
