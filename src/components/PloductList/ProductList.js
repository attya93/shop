import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import * as actionType from '../../store/shopAction/shopAction';

import Product from './Product/Product';
import Snigle from '../snigle/snigle';
import './ProductList.scss';
const ProductList = (props) => {
    const { onNewList, onNameAndLenth } = props
    const [NameOfList, setNameOfList] = useState();
    const [styleOfList, setStyleOfList] = useState();
    useEffect(() => {
        onNewList();
        onNameAndLenth();
    }, [onNameAndLenth, onNewList])

    const showListOfProduct = (id) => {
        setNameOfList();
        setNameOfList(id)
    }
    const styleProductList = (shap) => {
        setStyleOfList(shap)
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
                        <button className="btn" onClick={() => styleProductList("react")}>List</button>
                        <button className="btn" onClick={() => styleProductList()}>Grid</button>
                    </div>
                </div>
                {!NameOfList ? <p>No Prand Selected</p>
                    :
                    <div className="product-list-view__prod">
                        {/* {
                            console.log(props.prod.shopProduct[NameOfList])
                        } */}
                        <Snigle catgName="realme" id="1" img="http://placehold.it/250" prodName="3 pro" price="3000" isAvailble="true" showControls="false" />
                        <Snigle catgName="realme" id="1" img="http://placehold.it/250" prodName="3 pro" price="3000" isAvailble="true" showControls="false" />
                        <Snigle catgName="realme" id="1" img="http://placehold.it/250" prodName="3 pro" price="3000" isAvailble="true" showControls="false" />
                        <Snigle catgName="realme" id="1" img="http://placehold.it/250" prodName="3 pro" price="3000" isAvailble="true" showControls="false" />
                        <Snigle catgName="realme" id="1" img="http://placehold.it/250" prodName="3 pro" price="3000" isAvailble="true" showControls="false" />
                        <Snigle catgName="realme" id="1" img="http://placehold.it/250" prodName="3 pro" price="3000" isAvailble="true" showControls="false" />
                    </div>
                }
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
