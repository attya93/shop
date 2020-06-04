import React, { useEffect, useReducer } from 'react'

import { validate } from '../../../shared/Util/validators';
import './Input.scss';

const inputReducer = (state, action) => {
    switch (action.type) {
        case "Change":
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.rules)
            }
        case "Touch":
            return {
                ...state,
                isTouched: true

            }
        default:
            return state;
    }
};


const Input = (props) => {
    const [inState, dispatch] = useReducer(inputReducer, {
        value: props.valuez || "",
        isValid: props.valid || false,
        isTouched: props.touchz || false
    })
    const { id, onInput } = props;
    const { value, isValid } = inState;
    // to send data back to user 
    useEffect(() => {
        onInput(id, value, isValid);
    }, [onInput, id, value, isValid]);

    const changeHandler = (event) => {
        dispatch({ type: "Change", val: event.target.value, rules: props.validators });
    }

    const touchHandler = () => {
        dispatch({
            type: "Touch"
        })
    }
    let elements
    switch (props.element) {
        case "input":
            elements = <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={changeHandler}
                onBlur={touchHandler}
                autoComplete="true"
                min={props.Min}
                max={props.max}
                step={props.step}
                value={inState.value}
            />
            break;
        case "textarea":
            elements = <textarea
                id={props.id}
                row={props.row || 3}
                onChange={changeHandler}
                onBlur={touchHandler}
                autoComplete="true"
                value={inState.value} />
            break;
        case "option":
            elements = <select onChange={changeHandler}>
                {props.op.map(opt => {
                    return <option key={opt} value={opt}>{opt}</option>
                })
                }
            </select>
            break;
        default: elements = <input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            onChange={changeHandler} />
            break;
    }
    let radioElement = []
    if (props.type === 'radio') {
        radioElement = props.radios.map((radio, index) => {
            return <label key={index} style={{ display: "inline-block ", marginLeft: "1rem", marginRight: "1rem" }}><input type="radio" value={radio} style={{ display: "inline-block" }} name={props.name} checked={radio === inState.value} onChange={changeHandler} />{radio} </label>
        })
        elements = [...radioElement]
    }


    return (
        <div className={`form-controls${!inState.isVaild && (props.type === "number" ? false : inState.isTouched) ? "-error" : ""}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {elements}
            {!inState.isVaild && (props.type === "number" ? false : inState.isTouched) && <p>{props.errorText}</p>}
        </div>
    )
}

export default Input
