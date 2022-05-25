import React, {Component} from 'react';
import Product from "../Product/Product";

class ProductList extends Component {

    renderProduct = () => {
        if (this.props.products.length === 0)
            return <div>There is no product in cart</div>;
        
        return this.props.products.map((product, index) => {
            return (
                <Product
                    product={product}
                    key={index}
                    onDelete={() => this.props.onRemove(product.id)}
                    onIncr={() => this.props.onIncrement(product.id)}
                    onDecr={() => this.props.onDecrement(product.id)}
                    onChange={(e) => this.props.onReplace(e, product.id)}
                />
            );
        });
    }
    render() {
        return (
            <div>
                {this.renderProduct()}
            </div>
        );
    };
}

export default ProductList;