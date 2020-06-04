import React from 'react'

import Input from '../../FormElements/Input/Input';
import Button from '../../Button/Button';
import { Vaildator_Require, Vaildator_Min, Vaildator_Max } from '../../../shared/Util/validators';

import { useForm } from '../../../shared/Hooks/Form';

import '../new-product.scss';



const AddNewPorduct = (props) => {

    const [formState, InputHandler] = useForm({
        Category: {
            value: "",
            isValid: false
        },
        ProductType: {
            value: "",
            isValid: false
        },
        ProductName: {
            value: "",
            isValid: false
        },
        price: {
            value: "",
            isValid: false
        },
        Descreption: {
            value: "",
            isValid: false
        },
        IsNew: {
            value: "",
            isValid: false
        },
        IsAvailable: {
            value: "",
            isValid: false
        },
        qtBoxs: {
            value: 0,
            isValid: false
        },
        InBox: {
            value: 0,
            isValid: false
        },
        color: {
            value: "",
            isValid: true
        },
        Ram: {
            value: "",
            isValid: true
        },
        Processor: {
            value: "",
            isValid: true
        },
        Storge: {
            value: "",
            isValid: true
        },
        screen: {
            value: "",
            isValid: true
        }
    },
        false);


    const fromSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formState.inputs)
    }
    return (
        <form className="form" onSubmit={fromSubmitHandler}>
            <Input
                id="Category"
                element="input"
                label="Category"
                type="text"
                placeholder="Category"
                validators={[Vaildator_Require()]}
                onInput={InputHandler}
                errorText="Please Enter This Filed at leaset 5 char" />
            <Input
                id="ProductType"
                element="input"
                label="Product Type"
                type="text"
                placeholder="Product Type"
                validators={[Vaildator_Min(3)]}
                onInput={InputHandler}
                errorText="Please Enter This Filed at lease 3 char" />


            <Input
                id="ProductName"
                element="input"
                label="Product Name"
                type="text"
                placeholder="Product Name"
                validators={[Vaildator_Min(3)]}
                onInput={InputHandler}
                errorText="Please Enter This Filed at lease 3 char" />

            <Input
                id="price"
                element="input"
                label="Price"
                type="text"
                placeholder="Product Price"
                validators={[Vaildator_Min(3)]}
                onInput={InputHandler}
                errorText="Please Enter This Filed at lease 3 char" />

            <Input
                id="Descreption"
                element="textarea"
                label="Descreption"
                type="textarea"
                placeholder="Descreption "
                validators={[Vaildator_Min(5), Vaildator_Max(200)]}
                onInput={InputHandler}
                errorText="Please Enter This Filed at leaset 5 char but not more than 200 char  " />

            <Input
                id="IsNew"
                element="radio"
                label="Is New Product"
                type="radio"
                radios={["yes", "no"]}
                name="isNew"
                validators={[Vaildator_Require()]}
                onInput={InputHandler}
                errorText="Please Enter This Filed" />

            <Input
                id="IsAvailable"
                element="radio"
                label="Is Available"
                type="radio"
                radios={["yes", "no"]}
                name="isAvailable"
                validators={[Vaildator_Require()]}
                onInput={InputHandler}
                errorText="Please Enter This Filed" />

            <Input
                id="qtBoxs"
                element="input"
                label="Quantity Boxs"
                type="number"
                placeholder="0"
                validators={[Vaildator_Require()]}
                Min={1}
                onInput={InputHandler}
                errorText="Please Enter This Filed" />

            <Input
                id="InBox"
                element="input"
                label="Quantity In Box"
                type="number"
                Min={1}
                placeholder="0"
                validators={[Vaildator_Require()]}
                onInput={InputHandler}
                errorText="Please Enter This Filed" />

            <Input
                id="color"
                element="input"
                label="Color"
                type="text"
                placeholder="Colors"
                validators={[]}
                onInput={InputHandler}
                errorText="Please Enter This Filed" />


            <Input
                id="Ram"
                element="option"
                label="Ram"
                op={["4GB", "6GB", "8GB"]}
                validators={[]}
                onInput={InputHandler}
                errorText="Please Enter This Filed" />

            <Input
                id="Processor"
                element="input"
                label="Processor"
                type="text"
                placeholder="Processor"
                validators={[]}
                onInput={InputHandler}
                errorText="Please Enter This Filed" />

            <Input
                id="Storge"
                element="option"
                label="Storge"
                op={["64GB", "128GB", "225GB"]}
                validators={[]}
                onInput={InputHandler}
                errorText="Please Enter This Filed" />

            <Input
                id="Screen"
                element="input"
                label="Screen Size"
                type="text"
                placeholder="screen Size"
                validators={[]}
                onInput={InputHandler}
                errorText="Please Enter This Filed" />

            <div className="form-btn">
                <Button type="submit" disabled={!formState.isValid}>Add</Button>
            </div>
        </form>

    )
}

export default AddNewPorduct
