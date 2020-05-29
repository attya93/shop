import * as actionType from '../shopAction/shopAction';
import data from '../../data';
const initalState = {
    shopProduct: data.product.categoris,
    categoryName: [],
    isNewList: []
}

const getIsNew = (state) => {
    const items = [];
    Object.keys(state.shopProduct).map(item => {
        const ob = state.shopProduct[item];
        ob.forEach(element => {
            if (element.isNew) {
                items.push(element)
            }
        });
    });
    return items;
}
const getListNamelength = (state) => {
    const sliderImage = [];
    Object.keys(state.shopProduct).map(item => {
        const prop = state.shopProduct[item];
        sliderImage.push({ [item]: prop.length, name: item })
    });
    return sliderImage;
}


const Reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionType.NewProductList:
            return {
                ...state,
                isNewList: getIsNew(state)
            }
        case actionType.CategoryName:
            return {
                ...state,
                categoryName: getListNamelength(state)
            }
        default:
            return state;
    }
}

export default Reducer;