import * as actionType from '../shopAction/shopAction';
import data from '../../data';
const initalState = {
    shopProduct: data.product.categoris,
    categoryName: [],
    isNewList: [],
    singleProd: null,
    specifcation: null
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

const getSingleProduct = (state, action) => {
    const prod = [];
    const spcif = [];
    Object.keys(state.shopProduct).map((item) => {
        if (item === action.payload.catName) {
            const ob = state.shopProduct[item];
            ob.forEach(el => {
                if (el._id === action.payload.id) {
                    prod.push(el);
                    spcif.push(el.Specifications)
                }
            })

        }
    })
    return { prod: prod, spcif: spcif };
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
        case actionType.ShowSingleProd:
            return {
                ...state,
                singleProd: getSingleProduct(state, action)

            }
        default:
            return state;
    }
}

export default Reducer;