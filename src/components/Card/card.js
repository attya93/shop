import React from 'react'

import './Card.scss';
const card = (props) => {
    return (
        <article className="cardp">
            <header className="cardp__header">
                <h1 className="cardp__header-title">{props.prodName}</h1>
            </header>
            <div className="cardp__img">
                <img src={props.img} alt={props._id} />
            </div>
            <div className="cardp__content">
                <h2 className="cardp__content-price">{props.price} EGP</h2>
                <p className="cardp__content-desc">{props.isAvailble ? "In stock" : "out of stock"}</p>
            </div>
            <div className="cardp__control">
                <button className="btn btn__small">Edit</button>
                <button className="btn btn__small">to Cart</button>
                <button className="btn btn__small">Delete</button>
            </div>

        </article>
    )
}

export default card
