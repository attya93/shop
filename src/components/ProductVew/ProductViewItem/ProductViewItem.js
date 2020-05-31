import React from 'react'


import './ProductViewItem.scss';
const ProductViewItem = (props) => {
    return (
        <div className="item__Description">
            <div className="item__Description-title">{props.title}</div>
            <div className="item__Description-values">{props.values}</div>
        </div>
    )
}

export default ProductViewItem
