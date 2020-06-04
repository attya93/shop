import * as actionType from '../orderAction/orderAction';
import { updateObject } from '../Util/UpadateObject'

const intialState = {
    order: [],
    price: 0,
}



const orderPrice = (state, action) => {
    let total = 0;
    for (let order of state.order) {
        total = total + (order.product.price * parseInt(order.qty))
    }

    return (total);
}

const removeOrder = (state, action) => {
    const updateOrder = state.order.fliter(order => {
        return order.id !== action.id;
    })
    return updateOrder;
}


const orderReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.Order_Type_Set:
            return updateObject(state, {
                order: state.order.concat({ _id: (Math.random() * 100), ...action.initail })
            });
        case actionType.Order_Type_Add:
            return {
                ...state,
                order: [...state.order.filter(ob => {
                    if (ob._id === action.id) {
                        ob.qty = parseInt(ob.qty) + 1;
                    }
                    return true
                })]
            }

        case actionType.Order_Type_SUB:
            return {
                ...state,
                order: [...state.order.filter(ob => {
                    if (ob._id === action.id) {
                        if (ob.qty > 1) {
                            ob.qty = parseInt(ob.qty) - 1;
                        } else {
                            ob.qty = 1
                        }

                    }
                    return true
                })]
            }
        case actionType.Order_Type_RM:
            return {
                ...state,
                order: removeOrder(state, action)
            }
        case actionType.Order_Type_Result:
            return {
                ...state,
                price: orderPrice(state, action)
            }
        default:
            return state
    }
}


export default orderReducer;