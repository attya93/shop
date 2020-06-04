import React from 'react'

import Button from '../../Button/Button';
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
                    <Button className="btn " to={`/${props.cat}/${props.id}`}>Order Now</Button>
                </div>
            </div>
        </article>
    )
}

export default SliderCard
