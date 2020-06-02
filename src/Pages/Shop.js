import React, { useEffect } from 'react'

import { connect } from 'react-redux';
import * as actionType from '../store/shopAction/shopAction';


import SliderImage from '../components/Slider/SliderImage';
import Categoire from '../components/Categoire/Categoire';
import Loading from '../components/Loading/Loading';

const Shop = (props) => {

    const { onNewList, onNameAndLenth } = props;
    useEffect(() => {
        setTimeout(() => {
            onNewList();
            onNameAndLenth();
        }, 2000)


    }, [onNewList, onNameAndLenth])


    let view;
    if (props.prod.isNewList.length === 0 || props.prod.categoryName.length === 0) {
        view = <Loading />
    } else {
        view = (
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
    return (
        view

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
