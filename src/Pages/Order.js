import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { Order_ADD, Order_SUB, Order_Result, Order_RM } from '../store/orderAction/orderAction';

import Button from "../components/Button/Button";
import OrderView from '../components/OrderView/View/OrderVew';


const Order = (props) => {
    const { order, onResult, onAddQty, onSubQty, onRemove } = props;
    useEffect(() => {
        const id = setInterval(() => {
            onResult()
        }, 2000)
        return () => {
            clearInterval(id)
        }
    }, [onResult])


    if (order.order.length === 0 || !order) {
        return <h1 style={{ textAlign: "center", margin: "2rem auto" }}>No Product Found</h1>
    }
    return (
        <div className="cart">
            <h1>Your Order :</h1>

            <ul>
                {order.order && order.order.map((odr, index) => {
                    return <li key={odr._id}>
                        <OrderView
                            Name={`${odr.product.prodTyp} ${odr.product.ProdName}`}
                            Price={odr.product.price}
                            Qty={odr.qty}
                            add={() => onAddQty(odr._id)}
                            sub={() => onSubQty(odr._id)}
                        />
                        <div className="cart__delete">
                            <Button className='btn__small' onClick={() => onRemove(odr._id)}>Del</Button>
                        </div>
                    </li>
                })}
            </ul>
            <hr className="cart__hr" />
            <h2 className="cart__total">Total Price : {order.price} EGP</h2>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        order: state.order
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddQty: (OrderId) => dispatch(Order_ADD(OrderId)),
        onSubQty: (OrderId) => dispatch(Order_SUB(OrderId)),
        onResult: () => dispatch(Order_Result()),
        onRemove: (OrderId) => dispatch(Order_RM(OrderId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order)
