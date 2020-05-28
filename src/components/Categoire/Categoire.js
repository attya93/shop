import React, { useState } from 'react'

import Card from '../Card/card';
import './Categoitr.scss';
const Categoire = (props) => {
    const { list, controls } = props;
    const [counter, setCounter] = useState(0);

    const slideNextListOfProduct = () => {
        if (counter > (controls[0].realme - 3)) {
            setCounter((controls[0].realme - 2))
        } else {
            const newIndex = counter + 1
            setCounter(newIndex)
        }

    }
    const slidePrevListOfProduct = () => {
        if (counter > 0) {
            const newIndex = counter - 1
            setCounter(newIndex)
        }
    }
    return (
        <div className="card__slider">
            <h1>{props.listName}</h1>
            <div className="card__slider-warp" style={{
                transform: `translateX(-${counter * (100 / controls[0].realme)}%)`
            }}>
                {list.map(prod => {
                    return <Card
                        key={prod._id}
                        id={prod._id}
                        prodName={prod.ProdName}
                        img={prod.img}
                        price={prod.price}
                        isAvailble={prod.isAvailble}
                    />
                })}
            </div>
            <div className="card__slider-controls">
                <button className="left" onClick={slidePrevListOfProduct} disabled={counter === 0}>left</button>
                <br />
                <button className="right" onClick={slideNextListOfProduct} disabled={counter >= (controls[0].realme - 2)}>right</button>
            </div>
        </div>

    )
}

export default Categoire;
