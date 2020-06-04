import React from 'react'

import { connect } from 'react-redux';

import Input from '../../FormElements/Input/Input';
import Button from '../../Button/Button';
import { useForm } from '../../../shared/Hooks/Form';
import * as actionCreator from '../../../store/orderAction/orderAction';

import './OrderCard.scss';
const OrderCard = (props) => {
    const [formState, InputHandler] = useForm({
        qty: {
            value: "1",
            isValid: true
        }
    }, true);


    const fromSubmitHandler = event => {
        event.preventDefault();
        props.onOrder({ product: props.product, qty: formState.inputs.qty.value });
    }
    return (
        <div className="orderCard">
            <h3 className="orderCard__Title">Price</h3>
            <h5 className="orderCard__status">State:in stock</h5>
            <form className="form-controls__custom" onSubmit={fromSubmitHandler}>
                <Input
                    id="qty"
                    element="input"
                    type="number"
                    label="Qty"
                    validators={[]}
                    onInput={InputHandler}
                    Min={1}
                    Max={10}
                    step={1}
                    errorText="value must Be 1 not 0"
                    valuez={formState.inputs.qty.value}
                    valid={formState.inputs.qty.isValid}
                    touchz={!formState.inputs.qty.isValid}
                />
                <div className="orderCard__Controls">
                    <Button type="submit" disabled={!formState.isValid}>Add to Card</Button>
                </div>
            </form>
        </div>
    )
}

const mapStateToPros = state => {
    return {
        order: state.order
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrder: (val) => dispatch(actionCreator.Order_Set(val))
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(OrderCard)
