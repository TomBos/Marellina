import React,{useState} from 'react';
import {validateNewProduct} from '../hooks/hookNewProduct.js'


export default function NewProductTemplate() {
    const [price, setPrice] = useState();
    const [markup, setMarkup] = useState();
    const [weight, setWeight] = useState();
    const [region, setRegion] = useState();
    const [ripeness, setRipeness] = useState();
    const [category, setCategory] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        let productData = {
            "Price" : price,
            "Markup" : markup,
            "Weight" : weight,
            "Region" : region,
            "Ripeness" : ripeness,
            "Category" : category,
        }

        const productStatus = validateNewProduct(productData);


    }


    return(
        <div>
            <h1>New Product</h1><br></br>
            <form onSubmit={handleSubmit}>
                <label>price * </label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                /><br></br>

                <label>markup * </label>
                <input
                    type="number"
                    value={markup}
                    onChange={(e) => setMarkup(e.target.value)}
                /><br></br>

                <label>weight (in grams) * </label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                /><br></br>

                <label>region </label>
                <input
                    type="text"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                /><br></br>

                <label>ripeness </label>
                <input
                    type="text"
                    value={ripeness}
                    onChange={(e) => setRipeness(e.target.value)}
                /><br></br>

                <label>category* </label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                /><br></br>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}