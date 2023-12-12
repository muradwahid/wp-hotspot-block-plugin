/* eslint-disable no-unused-vars */
import {
  CheckboxControl,
  __experimentalInputControl as InputControl,
  PanelRow,
  RangeControl,
  SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegImage } from 'react-icons/fa6';
import { HiMiniXMark } from 'react-icons/hi2';
import { IoMdCopy } from 'react-icons/io';
import { IoText } from 'react-icons/io5';
import { toolbarPositions } from '../../../utils/options';
import IncludeExClude from '../IncludeExclude/IncludeExclude';
import PanelAlign from '../PanelAlign/PanelAlign';
import SvgIconCom from '../SvgIconCom/SvgIconCom';
import ThemeTooltip from '../ThemeTooltip/ThemeTooltip';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './spotsItems.scss';
const SpotsItems = ({
  element,
  onChange = () => {},
  attributes,
  handleDelete,
  handleCopy,
  index,
  activeIdx,
  setActiveIdx
}) => {
  const { themeone } = attributes;

  const [toggle, setToggle] = useState(false);
  const [spotIndex, setSpotIndex] = useState(index);
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
    icon: element.icon || '',
    position: element.position,
    spotLink: element.spotLink,
    newWindow: element.newWindow,
  });
  useEffect(() => {
    onChange(items);
  }, [items]);
  return (
    <div className="spots-items-container">
      <div
        className="spots-items-header"
        style={{
          borderBottom: activeIdx===index? '1px solid #ccc':"none",
        }}
      >
        <div
          onClick={() => setActiveIdx(index)}
          style={{ width: '100%', padding: '7px' }}
        >
          <p>Item #{`${index + 1}`}</p>
        </div>
        <div className="spots-items-header-icons">
          <div onClick={() => handleCopy(element)} className="header-icon">
            <IoMdCopy />
          </div>
          <div onClick={() => handleDelete(index)} className="header-icon">
            <HiMiniXMark />
          </div>
        </div>
      </div>
      {activeIdx === index && (
        <div className="spots-items-body">
          <IncludeExClude
            options={['spot', 'tooltip']}
            value={element.option}
            renderFunction={(value) =>
              setItems({ ...items, option: value, position: element.position })
            }
          />

          {element.option === 'spot' ? (
            <>
              <PanelAlign
                icons={[
                  { label: 'Text', value: <IoText /> },
                  { label: 'Icon', value: <FaStar /> },
                  { label: 'Image', value: <FaRegImage /> },
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
                      className="bphb-hostpot-block"
                      value={element?.spotText}
                      onChange={(value) =>
                        setItems({ ...items, spotText: value })
                      }
                    />
                  </PanelRow>
                  <PanelRow>
                    <p style={{ margin: 0 }}>Spot Link</p>
                    <InputControl
                      className="bphb-hostpot-block"
                      placeholder='https://example.com'
                      value={element?.spotLink}
                      onChange={(value) =>
                        setItems({ ...items, spotLink: value })
                      }
                    />
                  </PanelRow>
                  <CheckboxControl
                    label="Open in new window"
                    checked={element.newWindow}
                    onChange={(value) =>
                      setItems({
                        ...items,
                        newWindow: value,
                        position: element.position,
                      })
                    }
                  />
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
                      setItems({
                        ...items,
                        tooltipPosition: value,
                        position: element.position,
                      })
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
