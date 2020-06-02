import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import * as actionType from '../../store/shopAction/shopAction';
import { connect } from 'react-redux';

import Loading from '../Loading/Loading';
import ProductViewItem from './ProductViewItem/ProductViewItem';

const ProductView = (props) => {
    const { id, cat } = useParams();
    const { findProduct, cleanData } = props;
    let single = props.prod.singleProd;

    useEffect(() => {
        cleanData();
        setTimeout(() => {
            findProduct(cat, id)
        }, 2000)

    }, [cleanData, findProduct, cat, id])

    let view;
    if (single === null || single === 0) {
        view = <Loading />
    } else {
        view = (
            <section className="prod-shop">
                <div className="prod-shop__header">
                    <h2>{`${single.prod[0].prodTyp} ${single.prod[0].ProdName}`}</h2>
                </div>
                <div className="prod-shop__img">
                    <img src={single.prod[0].img} alt={single.prod[0]._id} />
                </div>
                <div className="prod-shop__details">
                    <h3>Details:</h3>
                    <h4>Price : {single.prod[0].price} EGP</h4>
                    <p>status : {single.prod[0].isAvailble ? "In stock" : "Out of Stock"}</p>
                    <p>Colors: {single && single.prod[0].color.join(" ")}</p>
                </div>
                <div className="prod-shop__spcif">
                    <h4>Spcifications:</h4>
                    {
                        single && Object.keys(single.spcif[0]).map((item, index) => {
                            return <ProductViewItem key={index} title={item} values={`${single.spcif[0][item]}`} />
                        })
                    }
                </div>
                <div className="prod-shop__desc">
                    <h4>Decription:</h4>
                    <p>{single && single.prod[0].desc}</p>
                </div>
                <div className="prod-shop__order">
                    <h4>Order:</h4>
                    <button className="btn">Order Now</button>
                </div>
            </section>
        )
    }

    return view

}


const mapStateToProps = state => {
    return {
        prod: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cleanData: () => dispatch({ type: actionType.CleanData }),
        findProduct: (cat, id) => dispatch({ type: actionType.ShowSingleProd, payload: { catName: cat, id: id } })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductView)
