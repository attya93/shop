import React from 'react'


import './SliderCard.scss';
const SliderCard = (props) => {
    return (
        <article className="card">
            <div className="card__img">
                <img className="img" src={props.img} alt={props.id} />
            </div>
            <div className="card__info">
                <h1 className="card__info-title">{props.name}</h1>
                <p className="card__info-desc">{props.desc}</p>
                <span className="card__info-details">color: {props.color.join(" ")}</span>
                <div className="card__info-order">
                    <h4 className="price">{`${props.price} EGP`}</h4>
                    <button className="btn btn-order">Order Now</button>
                </div>
            </div>
        </article>
    )
}

export default SliderCard
