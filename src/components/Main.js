import React from "react";
import Product from "./Product";


export default function Main(props) {
    const {products, onAdd} = props;
    return(
        <main className="block col-1">
            <h2>Products</h2>
            <div className="row">
                {products.map((products) => (
                    <Product key={products.id} product={products} onAdd={onAdd}></Product>
                ))}
            </div>
        </main>
    )
}