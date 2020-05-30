import React from 'react'
import { Link } from 'react-router-dom';
import './sngile.scss';
const snigle = (props) => {
    const { showControls } = props


    return (
        <div>

            <div className="cdProd">
                <Link to={`/${props.catgName}/${props.id}`}>
                    <div className="cdProd__title">
                        <h2>{props.prodName}</h2>
                    </div>
                    <div className="cdProd__img">
                        <img src={props.img} alt={props.id} />
                    </div>
                    <div className="cdProd__details">
                        <h4 className="cdProd__details-price">{props.price} EGP</h4>
                        <p className="cdProd__details-status">status:{props.isAvailble ? "In stock" : "out of stock"}</p>
                    </div>
                </Link>
                {!showControls &&
                    <div className="cdProd__controls">
                        <button className="btn__small">add</button>
                        <button className="btn__small">edit</button>
                        <button className="btn__small">delete</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default snigle
