import React from 'react';

const Slider = props => {
    return (
        <div className="range-slider">
            <input
                type="range"
                min="1"
                max="10"
                id="slider"
                step="0.5"
                onChange={props.handleChange}
                value={props.rating}
            />
            <span>{props.rating}</span>
        </div>
    )
}

export default Slider;