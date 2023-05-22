import React from 'react'

function Product(prop) {

    prop = prop.item;
    return (

        <div className='product'>
            <h3>{prop.name}</h3>
            <div>{prop.features}</div>
            <div>price : {prop.price}</div>
        </div>
    )
}

export default Product