import React, { useEffect } from 'react'

import { connect } from 'react-redux';
import * as actionType from '../store/shopAction/shopAction';


import SliderImage from '../components/Slider/SliderImage';
import Categoire from '../components/Categoire/Categoire';

const Shop = (props) => {
    useEffect(() => {
        props.onNewList();
        props.onNameAndLenth();

    }, [])
    return (
        <>
            <main>
                <SliderImage product={props.prod.isNewList} />
            </main>
            {Object.keys(props.prod.shopProduct).map((list, index) => {
                return <Categoire key={index} listName={list} list={props.prod.shopProduct[list]} controls={props.prod.categoryName} />
            })}
        </>
    )
}
const mapStateToProps = state => {
    return {
        prod: state
    };
}


const mapDispatchToProps = dispatch => {
    return {
        onNewList: () => dispatch({ type: actionType.NewProductList }),
        onNameAndLenth: () => dispatch({ type: actionType.CategoryName })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop)
