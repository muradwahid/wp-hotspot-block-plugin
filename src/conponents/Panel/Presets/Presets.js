import React from 'react';
import './presets.scss';
const Presets = ({ render, value, themes }) => {
  return (
    <div className="presets-container">
      {themes.map((e, i) => (
        <div
          key={i}
          onClick={() => render(i + 1)}
          className="single-preset"
          style={{ borderWidth: value === i + 1 ? '3px' : '1px' }}
        >
          <div className="preset-tooltip-container">
            <div className="preset-tooltip">
              <i className="fa-solid fa-caret-down"></i>
              <span>Design {i + 1}</span>
            </div>
          </div>
          <img src={e} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Presets;
