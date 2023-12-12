import React from 'react';
import './IncludeExclude.scss'
const IncludeExClude = ({ options, renderFunction, value, padding = 4 }) => {
  return (
    <>
      <style>
        {`
          .single-includeExclude p {
              padding: ${padding}px 0;
            }
          `}
      </style>
      <div className="includeExclude">
        {options?.map((option, i) => (
          <div
            key={i}
            onClick={() => renderFunction(option)}
            className={`single-includeExclude ${
              value === option
                ? 'isActive-include'
                : 'single-includeExclude-hover'
            }`}
          >
            <p style={{ textTransform: 'capitalize' }}>{option}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default IncludeExClude;
