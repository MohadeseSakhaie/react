import React, { Component, useState } from 'react';
import Product from "../Product/Product";

class ProductList extends Component {
    state = {
        Products: [
            { title: 'REact', price: '35$', id: 1, quantity: 5 },
            { title: 'javascript', price: '25$', id: 2, quantity: 2 },
            { title: 'Node.js', price: '38$', id: 3, quantity: 3 }
        ]
    };

    removeHandler = (id) => {
        console.log("clicked", id);
        const filterRemove = this.state.Products.filter((p) => p.id !== id);
        this.setState({ Products: filterRemove });
    };

    incrementHandler = (id) => {
        const Products = [...this.state.Products];
        // console.log("inc", id);
        const selectedItem = this.state.Products.find((p) => p.id === id);
        selectedItem.quantity++;
        // console.log(Products);
        this.setState({ Products});
    }
    decrementHandler = (id) => {
        const Products = [...this.state.Products];
        const selectedItem = this.state.Products.find((p) => p.id === id);
        if (selectedItem.quantity === 1) {
            const filterdPro = Products.filter((p) => p.id !== id);
            this.setState({ Products: filterdPro });
        } else {
            selectedItem.quantity--;
            this.setState({ Products});
        }
    }
    replaceHandler = (e, id) => {
        const Products = [...this.state.Products];
        const selectedItem = this.state.Products.find((p) => p.id === id);
        selectedItem.title = e.target.value;
        this.setState({ Products: Products });
        // console.log(e.target.value);
    }

    render() {
        return (
            <div>
                {this.state.Products.map((product) => {
                    return <Product
                        product={product}
                        onDelete={() => this.removeHandler(product.id)}
                        onIncr={() => this.incrementHandler(product.id)}
                        onDecr={() => this.decrementHandler(product.id)}
                        onChange={(e) => this.replaceHandler(e, product.id)}
                    />
                })}
            </div>);
    }
}

export default ProductList;