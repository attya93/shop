import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionType from '../../../store/shopAction/shopActionTypes';

import Loading from '../../Loading/Loading';
import Subupdata from './subupadate';


const UpdateProduct = (props) => {
    let signle;
    const { prodId, cat } = useParams();
    const { findProduct, cleanData } = props;
    useEffect(() => {
        cleanData()
        setTimeout(() => {
            findProduct(cat, prodId)
        }, 2000)

    }, [cleanData, findProduct, cat, prodId,])

    if (!props.prod.singleProd) {
        return signle = <Loading />
    }


    if (!props.prod.singleProd) {
        return signle = <Loading />
    } else {
        signle = props.prod.singleProd.prod;
    }




    return (
        <Subupdata signle={signle} />
    )
}
const mapStateToProps = state => {
    return {
        prod: state.prod
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cleanData: () => dispatch({ type: actionType.CleanData }),
        findProduct: (cat, id) => dispatch({ type: actionType.ShowSingleProd, payload: { catName: cat, id: id } })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct)
