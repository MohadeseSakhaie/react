import React from 'react';
import ProductList from './component/ProductList/ProductList';
import "./App.css"
import NavBar from "./component/NavBar/NavBar"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                { title: 'React', price: '35$', id: 1, quantity: 5 },
                { title: 'Javascript', price: '25$', id: 2, quantity: 2 },
                { title: 'Node.js', price: '38$', id: 3, quantity: 3 }
            ],
        };
    }
    
    removeHandler = (id) => {
        console.log("clicked", id);
        const filterRemove = this.state.products.filter((p) => p.id !== id);
        this.setState({ products: filterRemove });
    };

    incrementHandler = (id) => {
        const products = [...this.state.products];
        const selectedItem = this.state.products.find((p) => p.id === id);
        selectedItem.quantity++;
        this.setState({ products });
    };
    decrementHandler = (id) => {
        const products = [...this.state.products];
        const selectedItem = this.state.products.find((p) => p.id === id);
        if (selectedItem.quantity === 1) {
            const filterdPro = products.filter((p) => p.id !== id);
            this.setState({ products: filterdPro });
        } else {
            selectedItem.quantity--;
            this.setState({ products });
        }
    };
    replaceHandler = (e, id) => {
        const products = [...this.state.products];
        const selectedItem = this.state.products.find((p) => p.id === id);
        selectedItem.title = e.target.value;
        this.setState({ products: products });
        console.log(e.target.value);
    };

    render() {
        return (
            <div className='container' id="title">
                <NavBar totalItem={this.state.products.filter(p=>p.quantity>0).length }/>
                <ProductList
                    products={this.state.products}
                    onRemove={this.removeHandler}
                    onIncrement={this.incrementHandler}
                    onDecrement={this.decrementHandler}
                    onReplace={this.replaceHandler}
                />
            </div>
        );
    }
}
export default App;