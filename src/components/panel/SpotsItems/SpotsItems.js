import {
  __experimentalInputControl as InputControl,
  PanelRow,
  RangeControl,
  SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from 'react';
import IncludeExClude from '../IncludeExClude/IncludeExClude';
import PanelAlign from '../PanelAlign/PanelAlign';
import './__spotsItems.scss';
import SvgIconCom from '../SvgIconCom/SvgIconCom';
import ThemeTooltip from '../ThemeTooltip/ThemeTooltip';
import {toolbarPositions } from '../../../utils/options';
const SpotsItems = ({
  element,
  onChange = () => {},
  attributes,
  handleDelete,
  index
}) => {
  const { themeone} = attributes;
  const [toggle, setToggle] = useState(false);
  const [items, setItems] = useState({
    borderColor: element.borderColor || '',
    bgColor: element.bgColor || '',
    spotsSize: element.spotsSize || '',
    option: element.option || '',
    spotOption: element.spotOption || 1,
    spotText: element.spotText || '+',
    tooltip: element.tooltip || 'Tooltip contents',
    tooltipPosition: element.tooltipPosition || 'left',
    image: element.image || '',
    icon:element.icon || "",
    position: element.position || {
      x: 0,
      y: 0,
    },
  });
  useEffect(() => {
    onChange(items);
  }, [items]);
  return (
    <div className="spots-items-container">
      <div
        className="spots-items-header"
        style={{ borderBottom: toggle ? '1px solid #ccc' : 'none' }}
        onClick={() => setToggle(!toggle)}
      >
        <div>
          <p>Item #{`${index + 1}`}</p>
        </div>
        <div className="spots-items-header-icons">
          <div className="header-icon">
            <i className="fa-regular fa-paste"></i>
          </div>
          <div onClick={() => handleDelete(index)} className="header-icon">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
      {toggle && (
        <div className="spots-items-body">
          <IncludeExClude
            options={['spot', 'tooltip']}
            value={element.option}
            renderFunction={(value) => setItems({ ...items, option: value })}
          />

          {element.option === 'spot' ? (
            <>
              <PanelAlign
                icons={[
                  { label: 'Text', value: 'fa-solid fa-font' },
                  { label: 'Icon', value: 'fa-solid fa-star' },
                  { label: 'Image', value: 'fa-regular fa-image' },
                ]}
                value={element?.spotOption}
                label="Type"
                renderFunction={(value) =>
                  setItems({ ...items, spotOption: value })
                }
              />
              {element.spotOption === 1 && (
                <>
                  <PanelRow>
                    <p style={{ margin: 0 }}>Text</p>
                    <InputControl
                      value={element?.spotText}
                      onChange={(value) =>
                        setItems({ ...items, spotText: value })
                      }
                    />
                  </PanelRow>
                </>
              )}
              {element.spotOption === 2 && (
                <>
                  <SvgIconCom
                    image={element.icon}
                    label="Upload SVG"
                    renderFunction={(val) =>
                      setItems({ ...items, icon: val.url })
                    }
                  />
                </>
              )}
              {element.spotOption === 3 && (
                <div style={{ margin: '15px 0' }}>
                  <SvgIconCom
                    image={element.image}
                    label="Choose Image"
                    renderFunction={(val) =>
                      setItems({ ...items, image: val.url })
                    }
                  />
                </div>
              )}
              <div
                style={{
                  borderTop: '1px solid #ccc',
                  borderBottom: '1px solid #ccc',
                  padding: '10px 0',
                  margin: '10px 0',
                }}
              >
                <RangeControl
                  label={__('X Position', 'hotspot-block')}
                  value={element.position.x}
                  onChange={(value) =>
                    setItems({
                      ...items,
                      position: { ...items.position, x: value },
                    })
                  }
                  min={-500}
                  max={1500}
                />
                <RangeControl
                  label={__('Y Position', 'hotspot-block')}
                  value={element.position.y}
                  onChange={(value) =>
                    setItems({
                      ...items,
                      position: { ...items.position, y: value },
                    })
                  }
                  min={-500}
                  max={1500}
                />
              </div>
            </>
          ) : (
            <>
              <ThemeTooltip
                element={element}
                onChange={(value) => setItems({ ...items, tooltip: value })}
              />
              <div
                style={{
                  borderTop: '1px solid #ccc',
                  paddingTop: '10px',
                  marginTop: '10px',
                }}
              >
                <PanelRow>
                  <span>Position</span>
                  <SelectControl
                    value={element.tooltipPosition}
                    options={toolbarPositions}
                    onChange={(value) =>
                      setItems({ ...items, tooltipPosition: value })
                    }
                  />
                </PanelRow>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SpotsItems;
