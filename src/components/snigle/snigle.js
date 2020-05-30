import React from 'react'
import { Link } from 'react-router-dom';
import './sngile.scss';
const snigle = (props) => {
    const { showControls, shap } = props

    return (
        <div>

            <div className={shap ? "reactx" : "cdProd"}>
                <Link to={`/${props.catgName}/${props.id}`} className={shap ? "react" : null}>
                    <div className={`${shap ? "react" : "cdProd"}__title`}>
                        <h2>{props.prodName}</h2>
                    </div>
                    <div className={`${shap ? "react" : "cdProd"}__img`}>
                        <img src={props.img} alt={props.id} />
                    </div>
                    <div className={`${shap ? "react" : "cdProd"}__details`}>
                        <h4 className={`${shap ? "react" : "cdProd"}price`}>{props.price} EGP</h4>
                        <p className={`${shap ? "react" : "cdProd"}__details-status`}>status:{props.isAvailble === "true" ? "In stock" : "out of stock"}</p>
                    </div>
                </Link>
                {showControls ? <div className={`${shap ? "reactx" : "cdProd"}__controls`}>
                    <button className="btn__small">add</button>
                    <button className="btn__small">edit</button>
                    <button className="btn__small">delete</button>
                </div>
                    : null
                }
            </div>
        </div >
    )
}

export default snigle
