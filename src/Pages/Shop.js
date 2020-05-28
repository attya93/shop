import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux';
import * as actionType from '../store/shopAction/shopAction';


import SliderImage from '../components/Slider/SliderImage';
import Categoire from '../components/Categoire/Categoire';
import store from '../data';


const Shop = (props) => {

    // const [shopInger] = useState(store.product.categoris);
    // const items = [];
    // const sliderImage = [];
    // Object.keys(shopInger).map(item => {
    //     const prop = shopInger[item];
    //     sliderImage.push({ [item]: prop.length, name: item })
    //     prop.forEach(element => {
    //         if (element.isNew) {
    //             items.push(element)
    //             return element
    //         }
    //     });
    // });
    useEffect(() => {
        props.onNewList();

    }, [])
    console.log(props.prod)
    return (
        <>
            <main>
                <SliderImage product={props.prod.isNewList} />
            </main>
            {/* {Object.keys(shopInger).map((list, index) => {
                return <Categoire key={index} listName={list} list={shopInger[list]} controls={sliderImage} />
            })} */}
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
