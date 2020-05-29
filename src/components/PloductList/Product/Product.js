import React from 'react'

import './Product.scss';
const Product = (props) => {
    return (
        <div className="cat-card" onClick={props.checked} >
            <div className="cat-card__img">
                <img src="http://placehold.it/300" alt="cat-" />
            </div>
            <div className="cat-card__info">
                <h4>{props.name}</h4>
            </div>
        </div>

    )
}

export default Product
