import React from "react";
import '../../css/product.css'
class Product extends React.Component {
    render() {
        const { image, price, quantity } = this.props
        return (
            <div className="product">
                <img src={image} className="image" />
                <div className="detail">
                    <span>Price - {price}</span>
                    <span>Quantity - {quantity}</span>
                </div>
            </div>
        )
    }
}

export default Product