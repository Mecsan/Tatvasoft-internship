import React from 'react'
import useStyles from '../styles/styles';

function Product(prop) {

    let classes = useStyles()

    prop = prop.item;
    return (

        <div className={classes.product}>
            <h3>{prop.name}</h3>
            <div>{prop.features}</div>
            <div>price : {prop.price}</div>
        </div>
    )
}

export default Product