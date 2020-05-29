import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import * as actionType from '../../store/shopAction/shopAction';

import Product from './Product/Product';
import Card from '../Card/card';
import './ProductList.scss';
const ProductList = (props) => {
    const { onNewList, onNameAndLenth } = props
    useEffect(() => {
        onNewList();
        onNameAndLenth();
    }, [onNameAndLenth, onNewList])

    const showListOfProduct = (id) => {
        console.log("clicked", id)
    }

    return (
        <>
            <div className="category__list">
                <div className="category__list-gen">
                    {
                        props.prod.categoryName.map(item => {
                            return <Product
                                key={item.name}
                                name={item.name}
                                checked={() => showListOfProduct(item.name)} />
                        })
                    }
                </div>
            </div>
            <div className="product-list-view">
                <div className="product-list-view__control">
                    <div className="controls__search">
                        search component
                    </div>
                    <div className="contorls__display">
                        square
                        reactangular
                    </div>
                </div>
                <div className="product-list-view__prod">
                    <Card
                        shap="react"
                        prodName="X max"
                        catgName="Apple"
                        img="http://placehold.it/200"
                        id="1"
                        price="20000"
                        isAvailble="true"
                        showControls="true"
                    />
                </div>
            </div>
        </>

    )
}

const mapStateToProps = state => {
    return {
        prod: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onNewList: () => dispatch({ type: actionType.NewProductList }),
        onNameAndLenth: () => dispatch({ type: actionType.CategoryName })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
