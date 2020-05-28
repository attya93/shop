import React from 'react'

import './SliderImage.scss';
const SliderControls = (props) => {
    return (
        <div>
            <button className="goleft" onClick={props.next}>GoLeft</button>
            <button className="goright " onClick={props.prev}>GoRight</button>
        </div>
    )
}

export default SliderControls
