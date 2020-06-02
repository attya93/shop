import React from 'react'


import Input from '../../FormElements/Input/Input';
import Button from '../../Button/Button';

import { Vaildator_Require, Vaildator_Min, Vaildator_Max } from '../../../shared/Util/validators';
import { useForm } from '../../../shared/Hooks/Form';

import '../new-product.scss';


const Subupadate = (props) => {
    const { signle } = props;
    const [fromState, InputHandler] = useForm({
        Category: {
            value: signle[0].prodTyp,
            isValid: true
        },
        ProductType: {
            value: signle[0].prodTyp,
            isValid: true
        },
        ProductName: {
            value: signle[0].ProdName,
            isValid: true
        },
        price: {
            value: signle[0].price,
            isValid: true
        },
        Descreption: {
            value: signle[0].desc,
            isValid: true
        },
        IsNew: {
            value: signle[0].isNew ? "yes" : "no",
            isValid: true
        },
        IsAvailable: {
            value: signle[0].isAvailble ? "yes" : "no",
            isValid: true
        },
        qtBoxs: {
            value: signle[0].quantitBox,
            isValid: true
        },
        InBox: {
            value: signle[0].quantityInBox,
            isValid: true
        },
        color: {
            value: signle[0].color.join(" "),
            isValid: true
        },
        Ram: {
            value: signle[0].Specifications.ram,
            isValid: true
        },
        Processor: {
            value: signle[0].Specifications.processor,
            isValid: true
        },
        Storge: {
            value: signle[0].Specifications.storge,
            isValid: true
        },
        Screen: {
            value: signle[0].Specifications.screen,
            isValid: true
        }
    }, true);

    const fromSubmitHandler = (e) => {
        e.preventDefault();
        console.log(fromState.inputs)
    }

    console.log(fromState.inputs.Category.isValid)
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
                errorText="Please Enter This Filed at leaset 5 char"
                valuez={fromState.inputs.Category.value}
                valid={fromState.inputs.Category.isValid}
            />

            <Input
                id="ProductType"
                element="input"
                label="Product Type"
                type="text"
                placeholder="Product Type"
                validators={[Vaildator_Min(3)]}
                onInput={InputHandler}
                errorText="Please Enter This Filed at lease 3 char"
                valuez={fromState.inputs.ProductType.value}
                valid={fromState.inputs.ProductType.isValid}
            />


            <Input
                id="ProductName"
                element="input"
                label="Product Name"
                type="text"
                placeholder="Product Name"
                validators={[Vaildator_Require()]}
                onInput={InputHandler}
                valuez={fromState.inputs.ProductName.value}
                valid={fromState.inputs.ProductName.isValid}
                errorText="Please Enter This Filed " />

            <Input
                id="price"
                element="input"
                label="Price"
                type="text"
                placeholder="Product Price"
                validators={[Vaildator_Min(3)]}
                onInput={InputHandler}
                errorText="Please Enter This Filed at lease 3 char"
                valuez={fromState.inputs.price.value}
                valid={fromState.inputs.price.isValid}
            />

            <Input
                id="Descreption"
                element="textarea"
                label="Descreption"
                type="textarea"
                placeholder="Descreption "
                validators={[Vaildator_Min(5), Vaildator_Max(200)]}
                onInput={InputHandler}
                errorText="Please Enter This Filed at leaset 5 char but not more than 200 char  "
                valuez={fromState.inputs.Descreption.value}
                valid={fromState.inputs.Descreption.isValid}
            />

            <Input
                id="IsNew"
                element="radio"
                label="Is New Product"
                type="radio"
                radios={["yes", "no"]}
                name="isNew"
                validators={[Vaildator_Require()]}
                onInput={InputHandler}
                errorText="Please Enter This Filed"
                valuez={fromState.inputs.IsNew.value}
                valid={fromState.inputs.IsNew.isValid}
            />

            <Input
                id="IsAvailable"
                element="radio"
                label="Is Available"
                type="radio"
                radios={["yes", "no"]}
                name="isAvailable"
                validators={[Vaildator_Require()]}
                onInput={InputHandler}
                errorText="Please Enter This Filed"
                valuez={fromState.inputs.IsAvailable.value}
                valid={fromState.inputs.IsAvailable.isValid}
            />

            <Input
                id="qtBoxs"
                element="input"
                label="Quantity Boxs"
                type="number"
                placeholder="0"
                validators={[Vaildator_Require()]}
                onInput={InputHandler}
                errorText="Please Enter This Filed"
                valuez={fromState.inputs.qtBoxs.value}
                valid={fromState.inputs.qtBoxs.isValid} />

            <Input
                id="InBox"
                element="input"
                label="Quantity In Box"
                type="number"
                placeholder="0"
                validators={[Vaildator_Require()]}
                onInput={InputHandler}
                errorText="Please Enter This Filed"
                valuez={fromState.inputs.InBox.value}
                valid={fromState.inputs.InBox.isValid} />

            <Input
                id="color"
                element="input"
                label="Color"
                type="text"
                placeholder="Colors"
                validators={[]}
                onInput={InputHandler}
                errorText="Please Enter This Filed"
                valuez={fromState.inputs.color.value}
                valid={fromState.inputs.color.isValid} />



            <Input
                id="Ram"
                element="option"
                label="Ram"
                op={["4GB", "6GB", "8GB"]}
                validators={[]}
                onInput={InputHandler}
                errorText="Please Enter This Filed"
                valuez={fromState.inputs.Ram.value}
                valid={fromState.inputs.Ram.isValid}
            />

            <Input
                id="Processor"
                element="input"
                label="Processor"
                type="text"
                placeholder="Processor"
                validators={[]}
                onInput={InputHandler}
                errorText="Please Enter This Filed"
                valuez={fromState.inputs.Processor.value}
                valid={fromState.inputs.Processor.isValid}
            />

            <Input
                id="Storge"
                element="option"
                label="Storge"
                op={["64GB", "128GB", "225GB"]}
                validators={[]}
                onInput={InputHandler}
                errorText="Please Enter This Filed"
                valuez={fromState.inputs.Storge.value}
                valid={fromState.inputs.Storge.isValid}
            />

            <Input
                id="Screen"
                element="input"
                label="Screen Size"
                type="text"
                placeholder="screen Size"
                validators={[]}
                onInput={InputHandler}
                errorText="Please Enter This Filed"
                valuez={fromState.inputs.Screen.value}
                valid={fromState.inputs.Screen.isValid}
            />
            <div className="form-btn">
                <Button type="submit" disabled={!fromState.isValid}>Edit</Button>
            </div>
        </form>
    )
}

export default Subupadate
