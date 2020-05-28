import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/card';
import './Categoitr.scss';
const Categoire = (props) => {
    const { list, controls, listName } = props;
    const [counter, setCounter] = useState(0);
    let obj = controls.find(ob => ob.name === listName)

    const slideNextListOfProduct = () => {
        if (counter > obj[listName] - 1) {
            setCounter(obj[listName])
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
            <h1><Link to={`/product/${listName}`}>{listName}</Link></h1>
            <div className="card__slider-warp" style={{
                transform: `translateX(-${counter * (100 / (obj[listName] - 1))}%)`
            }}>
                {list.map(prod => {
                    return <Card
                        key={prod._id}
                        id={prod._id}
                        catgName={listName}
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
                <button className="right" onClick={slideNextListOfProduct} disabled={counter >= (obj[listName] - 2)}>right</button>
            </div>
        </div >

    )
}

export default Categoire;
