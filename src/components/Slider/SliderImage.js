import React, { useState } from 'react'

import SliderControls from './SliderControls';
import SliderCard from './SliderCard/SliderCard';
import './SliderImage.scss';
const SliderImage = (props) => {
    const [offsetX, setOffsetX] = useState(0);
    const product = props.product;
    const newProd = product.filter(prod => prod.isNew === true);



    const slideToLeft = () => {
        offsetX === (-100 * (newProd.length - 1)) ? setOffsetX(0) : setOffsetX(offsetX - 100)
    }
    const slideToRight = () => {
        (offsetX === 0 ? setOffsetX(-100 * (newProd.length - 1)) : setOffsetX(offsetX + 100));
    }
    let viewes;
    if (!product) {
        viewes = <div> No Product Found</div>
    } else {
        viewes = (
            <div className="slider">
                {
                    newProd.map(item => {
                        return (
                            <div className="slide"
                                key={item._id}
                                style={{ transform: `translateX(${offsetX}%)` }}>
                                <SliderCard
                                    name={`${item.prodTyp} ${item.ProdName}`}
                                    desc={item.desc}
                                    price={item.price}
                                    img={item.img}
                                    id={item._id}
                                    color={item.color}
                                />
                            </div>
                        )
                    })
                }
                <SliderControls
                    prev={slideToLeft}
                    next={slideToRight}
                />
            </div>
        )
    }
    return (viewes)

}

export default SliderImage
