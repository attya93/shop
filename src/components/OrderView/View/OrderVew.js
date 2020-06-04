import React from 'react'

import Button from '../../Button/Button';

import './OrderView.scss'
const OrderVew = (props) => {
    const { Name, Price, Qty } = props
    return (
        <div className="orderView">
            <div className="orderView__img">
                <img src="http://placehold.it/250" alt="1" />
            </div>
            <div className="orderView__details">
                <h3 className="oederView__details-Name">{Name}</h3>
                <h4 className="oederView__details-price">Price: {Price}</h4>
                <h4 className="oederView__details-qty">Qty : {Qty}</h4>
                <Button className="btn__small" onClick={props.add} >Add</Button>
                <Button className="btn__small" onClick={props.sub}>SUB</Button>
            </div>
        </div>
    )
}

export default OrderVew
