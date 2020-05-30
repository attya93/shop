import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import * as actionType from '../../store/shopAction/shopAction';
import { connect } from 'react-redux';

import Loading from '../Loading/Loading';

const ProductView = (props) => {
    console.log(props);
    const { id, cat } = useParams();
    const { findProduct } = props;

    useEffect(() => {
        setTimeout(() => {
            findProduct(cat, id)
        }, 2000)

    }, [findProduct, cat, id])

    console.log(props.prod.singleProd)
    let view;
    if (props.prod.singleProd === null) {
        view = <Loading />
    } else {
        view = <h1>Hello</h1>
    }
    return (
        <section className="prod-shop">
            <div className="prod-shop__header">
                <h2>Realme 3 Pro</h2>
            </div>
            <div className="prod-shop__img">
                <img src="http://placehold.it/250" alt="1" />
            </div>
            <div className="prod-shop__details">
                <h4>Price : 4000 EGP</h4>
                <p>status : in stock</p>
            </div>


        </section>
    )
}


const mapStateToProps = state => {
    return {
        prod: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        findProduct: (cat, id) => dispatch({ type: actionType.ShowSingleProd, payload: { catName: cat, id: id } })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductView)
