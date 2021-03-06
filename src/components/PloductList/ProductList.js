import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import * as actionType from '../../store/shopAction/shopActionTypes';

import Product from './Product/Product';
import Snigle from '../snigle/snigle';
import './ProductList.scss';
const ProductList = (props) => {
    const { onNewList, onNameAndLenth } = props
    const [NameOfList, setNameOfList] = useState();
    const [styleOfList, setStyleOfList] = useState();
    const [showControls, setShowControls] = useState(false);
    const prod = props.prod;

    const toggleShowControls = () => {
        setShowControls(!showControls)
    }
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
                        <button className="btn__small" onClick={() => styleProductList("react")}>List</button>
                        <button className="btn__small" onClick={() => styleProductList()}>Grid</button>
                        <button className="btn__small" onClick={toggleShowControls}>Control</button>
                    </div>
                </div>
                {!NameOfList ? <p className="woranging">No Prand Selected</p>
                    :
                    <div className="product-list-view__prod" style={{ display: `${styleOfList === "react" ? "block" : "flex"}` }}>
                        {
                            prod && props.prod.shopProduct[NameOfList].map(item => {
                                return <Snigle
                                    key={item._id}
                                    catgName={NameOfList}
                                    id={item._id}
                                    img={item.img}
                                    prodName={item.ProdName}
                                    price={item.price}
                                    isAvailble={item.isAvailble}
                                    showControls={showControls}
                                    shap={styleOfList}
                                />
                            })
                        }

                    </div>
                }
            </div>
        </>

    )
}

const mapStateToProps = state => {
    return {
        prod: state.prod
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onNewList: () => dispatch({ type: actionType.NewProductList }),
        onNameAndLenth: () => dispatch({ type: actionType.CategoryName })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
