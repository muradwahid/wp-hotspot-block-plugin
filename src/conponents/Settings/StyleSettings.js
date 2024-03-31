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
import PanelColorControl from '../Panel/PanelColorControl/PanelColorControl';
import PanelShadow from '../Panel/PanelShadow/PanelShadow';
import StyleSettingsOne from './StyleSettingsOne';
const StyleSettings = ({ attributes, setAttributes }) => {
  const { image } = attributes;
  const [device, setDevice] = useState("desktop")
  return (
    <Fragment>
      <PanelBody initialOpen={true} title={__('Image', 'b-blocks')}>
        <PanelRow
        >
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
            value={image.width[device]}
            min={1}
            max={100}
            onChange={(value) =>
              setAttributes({
                image: updateData(image, value, "width", device)
              })
            }
          />
        </PanelRow>
        <PanelRow
        >
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
            value={image.height[device]}
            min={1}
            max={1000}
            onChange={(value) =>
              setAttributes({
                image: updateData(image, value, "height", device)
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
            values={image.padding[device]}
            units={['px']}
            resetValues={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
            onChange={(value) =>
              setAttributes({ image: updateData(image, value, "padding", device) })
            }
          />

        </div>
        <div className="mt-10">
          <PanelRow>
            <span>{__("Border Type", "b-blocks")}</span>
            <SelectControl
              value={image.border}
              options={[
                { label: 'None', value: 'none' },
                { label: 'Solid', value: 'solid' },
                { label: 'Double', value: 'double' },
                { label: 'Dotted', value: 'dotted' },
                { label: 'Dashed', value: 'dashed' },
                { label: 'Groove', value: 'groove' },
              ]}
              onChange={(value) =>
                setAttributes({ image: { ...image, border: value } })
              }
            />
          </PanelRow>
        </div>

        {image.border !== 'none' && (
          <Fragment>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <span>{__("Border Width", "b-blocks")}</span>
                <Device
                  device={device}
                  onChange={(value) => setDevice(value)}
                />
              </div>
              <UnitControl
                style={{ width: '92px' }}
                units={['%']}
                isUnitSelectTabbable
                value={image.borderWidth[device]}
                min={0}
                max={50}
                onChange={(value) =>
                  setAttributes({
                    image: updateData(image, value, "borderWidth", device)
                  })
                }
              />
            </div>
            <PanelColorControl
              label={__("Border Color", "b-blocks")}
              value={image.borderColor}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({ image: { ...image, borderColor: value } })
              }
            />
          </Fragment>
        )}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>{__("Border Radius", "b-blocks")}</span>
            <Device
              device={device}
              onChange={(value) => setDevice(value)}
            />
          </div>
          <UnitControl
            style={{ width: '92px' }}
            units={['%']}
            isUnitSelectTabbable
            value={image.borderRadius[device]}
            min={0}
            max={100}
            onChange={(value) =>
              setAttributes({
                image: updateData(image, value, "borderRadius", device)
              })
            }
          />
        </div>

        <PanelShadow
          label={__("Box Shadow", "b-blocks")}
          value={image.boxShadow}
          onChange={(value) =>
            setAttributes({ image: { ...image, boxShadow: value } })
          }
        />
      </PanelBody>
      <StyleSettingsOne attributes={attributes} setAttributes={setAttributes} />
    </Fragment>
  );
};
export default StyleSettings;
