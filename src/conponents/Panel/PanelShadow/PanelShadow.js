/* eslint-disable no-unused-vars */
import {
  ToggleControl,
  __experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { useState,useEffect} from 'react';
import './panelShadow.scss';
import PanelColorPicker from '../PanelColorPicker/PanelColorPicker';
import { Button } from '@wordpress/components';
import { Dropdown } from '@wordpress/components';
const PanelShadow = ({ value, onChange=()=>{},label }) => {
  const shadow = value || '1px 1px 0px 0px #000000 inset';
  const split = shadow.split(' ');
  const arr = Array.from(split);
  const [isInset, setIsInset] = useState(arr[4] === 'inset' ? true : false);
  const [newArr,setNewArr]=useState({
    x: arr[0] || '0px',
    y: arr[1] || '0px',
    blur: arr[2] || '0px',
    spread: arr[3] || '0px',
    color: arr[4] || '#000000',
  })
  useEffect(() => {
    onChange(
      `${newArr.x} ${newArr.y} ${newArr.blur} ${newArr.spread} ${
        newArr.color
      } ${isInset ? 'inset' : ''}`
    );
  }, [newArr,isInset]);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '5px',
        margin: '10px 0',
      }}
    >
      <span>{label}</span>
      <Dropdown
        className="my-container-class-name"
        contentClassName="my-popover-content-classname"
        renderToggle={({ isOpen, onToggle, onClose }) => (
          <Button icon="edit" onClick={onToggle} aria-expanded={isOpen} />
        )}
        renderContent={({ isOpen, onToggle, onClose }) => (
          <div>
            <div className="panel-shadow-container">
              <div className="single-shadow-panel">
                <span>HORIZONTAL OFFSET:</span>
                <UnitControl
                  value={arr[0]}
                  units={['px', 'em', 'rem']}
                  style={{ width: '110px' }}
                  onChange={(val) => setNewArr({ ...newArr, x: val })}
                />
              </div>
              <div className="single-shadow-panel">
                <span>VERTICAL OFFSET:</span>
                <UnitControl
                  value={arr[1]}
                  units={['px', 'em', 'rem']}
                  style={{ width: '110px' }}
                  onChange={(val) => setNewArr({ ...newArr, y: val })}
                />
              </div>
              <div className="single-shadow-panel">
                <span>BLUR:</span>
                <UnitControl
                  value={arr[2]}
                  units={['px', 'em', 'rem']}
                  style={{ width: '110px' }}
                  onChange={(val) => setNewArr({ ...newArr, blur: val })}
                />
              </div>
              <div className="single-shadow-panel">
                <span>SPREAD:</span>
                <UnitControl
                  value={arr[3]}
                  units={['px', 'em', 'rem']}
                  style={{ width: '110px' }}
                  onChange={(val) => setNewArr({ ...newArr, spread: val })}
                />
              </div>
              <div>
                <PanelColorPicker
                  label="Color:"
                  value={newArr.color}
                  renderFunction={(val) => setNewArr({ ...newArr, color: val })}
                />
              </div>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <ToggleControl
                  checked={isInset}
                  onChange={(val) => setIsInset(val)}
                />
                <span>Shadow Inset?</span>
              </div>
            </div>
            <div onClick={onClose}></div>
          </div>
        )}
      />
    </div>
  );
};

export default PanelShadow;
