import {
  __experimentalBoxControl as BoxControl,
  PanelBody,
  PanelRow,
  SelectControl,
  __experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment, useState } from 'react';
import { updateData } from '../../utils/functions';
import Device from '../Panel/Device/Device';
import IncludeExClude from '../Panel/IncludeExclude/IncludeExclude';
import PanelColorControl from '../Panel/PanelColorControl/PanelColorControl';
import PanelShadow from '../Panel/PanelShadow/PanelShadow';

const StyleSettingsOne = ({ setAttributes, attributes }) => {
  const { spotsone, tooltipone } = attributes;
  const [device, setDevice] = useState("desktop");
  return (
    <Fragment>
      <PanelBody initialOpen={false} title={__('Spots', 'b-blocks')}>
        <PanelRow>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>{__("Width", "b-blocks")}</span>
            <Device
              device={device}
              onChange={(value) => setDevice(value)}
            />
          </div>
          <UnitControl
            style={{ width: '92px' }}
            units={['%']}
            isUnitSelectTabbable
            value={spotsone.width[device]}
            min={1}
            max={700}
            onChange={(value) =>
              setAttributes({
                spotsone: updateData(spotsone, value, "width", device)
              })
            }
          />
        </PanelRow>
        <PanelRow>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>{__("Height", "b-blocks")}</span>
            <Device
              device={device}
              onChange={(value) => setDevice(value)}
            />
          </div>
          <UnitControl
            style={{ width: '92px' }}
            units={['%']}
            isUnitSelectTabbable
            value={spotsone.height[device]}
            min={1}
            max={700}
            onChange={(value) =>
              setAttributes({
                spotsone: updateData(spotsone, value, "height", device)
              })
            }
          />
        </PanelRow>
        <PanelRow>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>{__("Icon Size", "b-blocks")}</span>
            <Device
              device={device}
              onChange={(value) => setDevice(value)}
            />
          </div>
          <UnitControl
            style={{ width: '92px' }}
            units={['%']}
            isUnitSelectTabbable
            value={spotsone.iconSize[device]}
            min={1}
            max={200}
            onChange={(value) =>
              setAttributes({
                spotsone: updateData(spotsone, value, "iconSize", device)
              })
            }
          />
        </PanelRow>

        <div style={{ position: 'relative', marginTop: '20px' }}>
          <Device
            style={{ position: 'absolute', left: '60px' }}
            device={device}
            onChange={(value) => setDevice(value)}
          />
          <BoxControl
            label={__("Padding", "b-blocks")}
            values={spotsone.padding[device]}
            units={['px']}
            resetValues={{
              left: '0px',
              right: '0px',
              top: '0px',
              bottom: '0px',
            }}
            onChange={(value) =>
              setAttributes({
                spotsone: updateData(spotsone, value, "padding", device)
              })
            }
          />
        </div>

        <div className="mt-10">
          <PanelRow>
            <span>{__("Border Type", "b-blocks")}</span>
            <SelectControl
              value={spotsone.borderType}
              options={[
                { label: 'None', value: 'none' },
                { label: 'Solid', value: 'solid' },
                { label: 'Double', value: 'double' },
                { label: 'Dotted', value: 'dotted' },
                { label: 'Dashed', value: 'dashed' },
                { label: 'Groove', value: 'groove' },
              ]}
              onChange={(value) =>
                setAttributes({ spotsone: updateData(spotsone, value, "borderType") })
              }
            />
          </PanelRow>
        </div>

        {spotsone.borderType !== 'none' && (
          <Fragment>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <span>{__("Border Width", "b-blocks")}</span>
                <Device
                  device={device}
                  onChange={(value) => setDevice(value)}
                />
              </div>
              <UnitControl
                style={{ width: '60px' }}
                units={['%']}
                isUnitSelectTabbable
                value={spotsone.borderWidth[device]}
                min={0}
                max={50}
                onChange={(value) =>
                  setAttributes({
                    spotsone: updateData(spotsone, value, "borderWidth", device)
                  })
                }
              />

            </div>
            <PanelColorControl
              label={__("Border Color", "b-blocks")}
              value={spotsone.borderColor}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({ spotsone: { ...spotsone, borderColor: value } })
              }
            />
          </Fragment>
        )}

        <div style={{ position: 'relative', marginTop: '20px' }}>
          <Device
            style={{ position: 'absolute', left: '90px' }}
            device={device}
            onChange={(value) => setDevice(value)}
          />
          <BoxControl
            label={__("Border Radius", "b-blocks")}
            values={spotsone.borderRadius[device]}
            units={['px']}
            resetValues={{
              left: '0px',
              right: '0px',
              top: '0px',
              bottom: '0px',
            }}
            onChange={(value) =>
              setAttributes({
                spotsone: updateData(spotsone, value, "borderRadius", device)
              })
            }
          />
        </div>

        <IncludeExClude
          options={['normal', 'hover']}
          value={spotsone.hover}
          renderFunction={(value) =>
            setAttributes({ spotsone: { ...spotsone, hover: value } })
          }
        />
        {spotsone.hover === 'normal' && (
          <Fragment>
            <PanelColorControl
              label="Text Color"
              value={spotsone.iconColor}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({ spotsone: { ...spotsone, iconColor: value } })
              }
            />
            <PanelColorControl
              label="Background Color"
              value={spotsone.bgColor}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({ spotsone: { ...spotsone, bgColor: value } })
              }
            />
          </Fragment>
        )}
        {spotsone.hover === 'hover' && (
          <Fragment>
            <PanelColorControl
              label="Text Color"
              value={spotsone.hoverColor.icon}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    hoverColor: { ...spotsone.hoverColor, icon: value },
                  },
                })
              }
            />
            <PanelColorControl
              label="Background Color"
              value={spotsone.hoverColor.bg}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    hoverColor: { ...spotsone.hoverColor, bg: value },
                  },
                })
              }
            />
            <PanelColorControl
              label="Border Color"
              value={spotsone.hoverColor.border}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    hoverColor: { ...spotsone.hoverColor, border: value },
                  },
                })
              }
            />
          </Fragment>
        )}
      </PanelBody>

      <PanelBody initialOpen={false} title={__('Tooltip', 'b-blocks')}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>{__("Width","b-blocks")}</span>
          <UnitControl
            style={{ width: '92px' }}
            units={[{label:"px",value:"px"}]}
            isUnitSelectTabbable
            value={tooltipone.width}
            min={1}
            max={800}
            onChange={(value) =>
              setAttributes({
                tooltipone: {
                  ...tooltipone,
                  width: value,
                },
              })
            }
          />
        </div>
        <div style={{ position: 'relative', marginTop: '20px' }}>
          <Device
            style={{ position: 'absolute', left: '60px' }}
            device={device}
            onChange={(value) =>setDevice(value)}
          />
            <BoxControl
              label={__("Padding","b-blocks")}
              values={tooltipone.padding[device]}
              units={[{ label: "px", value: "px" }]}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  tooltipone: updateData(tooltipone,value,"padding",device)
                })
              }
            />
        </div>

        <div style={{ position: 'relative', marginTop: '20px' }}>
          <Device
            style={{ position: 'absolute', left: '90px' }}
            device={device}
            onChange={(value) =>setDevice(value)}
          />
            <BoxControl
              label={__("Border Radius",'b-blocks')}
              values={tooltipone.borderRadius[device]}
              units={[{ label: "px", value: "px" }]}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  tooltipone: updateData(tooltipone,value,"borderRadius",device)
                })
              }
            />
        </div>

        <PanelColorControl
          label={__("Text Color","b-blocks")}
          value={tooltipone.textColor}
          colors={[
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
          ]}
          renderFunction={(value) =>
            setAttributes({ tooltipone: { ...tooltipone, textColor: value } })
          }
        />
        <PanelColorControl
          label={__("Background Color","b-blocks")}
          value={tooltipone.bgColor}
          colors={[
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
          ]}
          renderFunction={(value) =>
            setAttributes({ tooltipone: { ...tooltipone, bgColor: value } })
          }
        />

        <PanelShadow
          label={__("Box Shadow","b-blocks")}
          value={tooltipone.boxShadow}
          onChange={(value) =>
            setAttributes({ tooltipone: { ...tooltipone, boxShadow: value } })
          }
        />
      </PanelBody>
    </Fragment>
  );
};

export default StyleSettingsOne;
