/* eslint-disable no-unused-vars */
import { ColorPicker, Dropdown } from '@wordpress/components';
import React from 'react';

const PanelColorPicker = ({ value, renderFunction, label }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center',justifyContent:"space-between"}}>
      <div>
        {label}
      </div>
      <Dropdown
        className="my-container-class-name"
        contentClassName="my-popover-content-classname"
        renderToggle={({ isOpen, onToggle, onClose }) => (
          <div
            style={{
              height: '30px',
              width: '30px',
              borderRadius: '50%',
              background: `${value}`,
              cursor: "pointer",
              border:"1px solid #ccc"
            }}
            onClick={onToggle}
            aria-expanded={isOpen}
          ></div>
        )}
        renderContent={({ isOpen, onToggle, onClose }) => (
          <div>
            <ColorPicker
              color={value}
              onChange={(value) => renderFunction(value)}
            />
            <div onClick={onClose}></div>
          </div>
        )}
      />
    </div>
  );
};

export default PanelColorPicker;
