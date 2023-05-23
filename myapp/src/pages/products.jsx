import React from 'react'
import Product from '../component/produst'
import useStyles from '../styles/styles'

function Products() {
    let classses = useStyles();
    let data = [
        {
            name: "Redmi note 8 Pro",
            features: "8gb ram 128gb storage",
            price: "18,000"
        }, {
            name: "Iphone14 Pro",
            features: "",
            price: "1,80,000"
        }, {
            name: "Hp laptop",
            features: "8gb ram 1gb ssd",
            price: "45,000"
        }, {
            name: "Boat Headphone",
            features: "",
            price: "18,00"
        }]

    return (
        <div>
            <h2>Products</h2>

            <div className={classses.prdocut_container}>
                {
                    data.map((item, idx) => {
                        return (
                            <Product key={idx} item={item} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Products