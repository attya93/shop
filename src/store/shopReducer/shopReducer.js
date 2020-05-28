import * as actionType from '../shopAction/shopAction';
import data from '../../data';
const initalState = {
    shopProduct: data.product.categoris,
    categoryName: [],
    isNewList: []
}

const getIsNew = (state) => {
    const items = [];
    const arr = Object.keys(state.shopProduct).map(item => {
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
    const arr = Object.keys(state.shopProduct).map(item => {
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
            break;
        case actionType.CategoryName:
            return {
                ...state,
                categoryName: getListNamelength(state)
            }
            break;
        default:
            return state;
            break;
    }
}

export default Reducer;