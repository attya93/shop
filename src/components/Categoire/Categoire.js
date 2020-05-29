import React, { useState } from 'react'
import { Link } from 'react-router-dom'



import Card from '../Card/card';
import Loading from '../Loading/Loading';
import './Categoitr.scss';


const Categoire = (props) => {
    const { list, controls, listName } = props;
    const [counter, setCounter] = useState(0);
    let obj = controls.find(ob => ob.name === listName)
    let LengthOfEachlist = 1;
    if (obj) {
        LengthOfEachlist = obj[listName]
    }
    const slideNextListOfProduct = () => {
        if (counter > LengthOfEachlist - 1) {
            setCounter(LengthOfEachlist)
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

    let view;
    if (list.length === 0 || undefined) {
        view = <Loading />;
    }
    else {
        view = (list.map(prod => {
            return <Card
                key={prod._id}
                id={prod._id}
                catgName={listName}
                prodName={prod.ProdName}
                img={prod.img}
                price={prod.price}
                isAvailble={prod.isAvailble}
                showControls={true}
            />
        })
        );
    }
    return (
        <div className="card__slider">
            <h1><Link to={`/product/${listName}`}>{listName}</Link></h1>
            <div className="card__slider-warp" style={{
                transform: `translateX(-${counter * (100 / (LengthOfEachlist - 1))}%)`
            }}>
                {view}
            </div>
            <div className="card__slider-controls">
                <button className="left" onClick={slidePrevListOfProduct} disabled={counter === 0}>left</button>
                <br />
                <button className="right" onClick={slideNextListOfProduct} disabled={counter >= (LengthOfEachlist - 2)}>right</button>
            </div>
        </div >

    )
}

export default Categoire;
