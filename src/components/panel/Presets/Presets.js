import React from 'react';
import './__presets.scss'
const Presets = ({render,value}) => {
  const arr = [1, 2, 3, 4, 5]
  return (
    <div className="presets-container">
      {arr.map((e, i) => (
        <div
          key={i}
          onClick={() =>render(i + 1)}
          className="single-preset"
          style={{ borderWidth: value === i+1 ? '3px' : '1px' }}
        >
          <div className="preset-tooltip-container">
            <div className="preset-tooltip">
              <i className="fa-solid fa-caret-down"></i>
              <span>Design {i + 1}</span>
            </div>
          </div>
          <img src="https://i.ibb.co/4THWC8C/02-Home.png" alt="" />
        </div>
      ))}
    </div>
  );
};

export default Presets;