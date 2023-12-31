import {
  __experimentalBoxControl as BoxControl,
  PanelBody,
  PanelRow,
  SelectControl,
  __experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from 'react';

import StyleSettingsOne from './StyleSettingsOne';
import Device from '../Panel/Device/Device';
import PanelShadow from '../Panel/PanelShadow/PanelShadow';
import PanelColorControl from '../Panel/PanelColorControl/PanelColorControl';
const StyleSettings = ({ attributes, setAttributes }) => {
  const { image } = attributes;
  return (
    <Fragment>
      <PanelBody initialOpen={true} title={__('Image', 'hotspot-block')}>
        <PanelRow
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Width</span>
            <Device
              device={image.device}
              onChange={(value) =>
                setAttributes({ image: { ...image, device: value } })
              }
            />
          </div>
          {image.device === 'desktop' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              isUnitSelectTabbable
              value={image.width.desktop}
              min={1}
              max={100}
              onChange={(value) =>
                setAttributes({
                  image: {
                    ...image,
                    width: { ...image.width, desktop: value },
                  },
                })
              }
            />
          )}
          {image.device === 'tablet' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={1}
              max={100}
              isUnitSelectTabbable
              value={image.width.tablet}
              onChange={(value) =>
                setAttributes({
                  image: { ...image, width: { ...image.width, tablet: value } },
                })
              }
            />
          )}
          {image.device === 'mobile' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={1}
              max={100}
              isUnitSelectTabbable
              value={image.width.mobile}
              onChange={(value) =>
                setAttributes({
                  image: { ...image, width: { ...image.width, mobile: value } },
                })
              }
            />
          )}
        </PanelRow>
        <PanelRow
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Height</span>
            <Device
              device={image.heightDevice}
              onChange={(value) =>
                setAttributes({ image: { ...image, heightDevice: value } })
              }
            />
          </div>
          {image.heightDevice === 'desktop' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              isUnitSelectTabbable
              value={image.height.desktop}
              min={1}
              max={1000}
              onChange={(value) =>
                setAttributes({
                  image: {
                    ...image,
                    height: { ...image.height, desktop: value },
                  },
                })
              }
            />
          )}
          {image.heightDevice === 'tablet' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={1}
              max={1000}
              isUnitSelectTabbable
              value={image.height.tablet}
              onChange={(value) =>
                setAttributes({
                  image: {
                    ...image,
                    height: { ...image.height, tablet: value },
                  },
                })
              }
            />
          )}
          {image.heightDevice === 'mobile' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={1}
              max={1000}
              isUnitSelectTabbable
              value={image.height.mobile}
              onChange={(value) =>
                setAttributes({
                  image: {
                    ...image,
                    height: { ...image.height, mobile: value },
                  },
                })
              }
            />
          )}
        </PanelRow>
        <div style={{ position: 'relative', marginTop: '20px' }}>
          <Device
            style={{ position: 'absolute', left: '60px' }}
            device={image.paddingDevice}
            onChange={(value) =>
              setAttributes({ image: { ...image, paddingDevice: value } })
            }
          />
          {image.paddingDevice === 'desktop' && (
            <BoxControl
              label="Padding"
              values={image.paddingDesktop}
              units={['px']}
              resetValues={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              onChange={(value) =>
                setAttributes({ image: { ...image, paddingDesktop: value } })
              }
            />
          )}
          {image.paddingDevice === 'tablet' && (
            <BoxControl
              label="Padding"
              values={image.paddingTablet}
              units={['px']}
              resetValues={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              onChange={(value) =>
                setAttributes({ image: { ...image, paddingTablet: value } })
              }
            />
          )}
          {image.paddingDevice === 'mobile' && (
            <BoxControl
              label="Padding"
              values={image.paddingMobile}
              units={['px']}
              resetValues={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              onChange={(value) =>
                setAttributes({ image: { ...image, paddingMobile: value } })
              }
            />
          )}
        </div>
        <div className="mt-10">
          <PanelRow>
            <span>Border Type</span>
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
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <span>Border Width</span>
                <Device
                  device={image.borderWidthDevice}
                  onChange={(value) =>
                    setAttributes({
                      image: { ...image, borderWidthDevice: value },
                    })
                  }
                />
              </div>
              {image.borderWidthDevice === 'desktop' && (
                <UnitControl
                  style={{ width: '92px' }}
                  units={['%']}
                  isUnitSelectTabbable
                  value={image.borderWidth.desktop}
                  min={0}
                  max={50}
                  onChange={(value) =>
                    setAttributes({
                      image: {
                        ...image,
                        borderWidth: { ...image.borderWidth, desktop: value },
                      },
                    })
                  }
                />
              )}
              {image.borderWidthDevice === 'tablet' && (
                <UnitControl
                  style={{ width: '92px' }}
                  units={['%']}
                  min={0}
                  max={50}
                  isUnitSelectTabbable
                  value={image.borderWidth.tablet}
                  onChange={(value) =>
                    setAttributes({
                      image: {
                        ...image,
                        borderWidth: { ...image.borderWidth, tablet: value },
                      },
                    })
                  }
                />
              )}
              {image.borderWidthDevice === 'mobile' && (
                <UnitControl
                  style={{ width: '92px' }}
                  units={['%']}
                  min={0}
                  max={50}
                  isUnitSelectTabbable
                  value={image.borderWidth.mobile}
                  onChange={(value) =>
                    setAttributes({
                      image: {
                        ...image,
                        borderWidth: { ...image.borderWidth, mobile: value },
                      },
                    })
                  }
                />
              )}
            </div>
            <PanelColorControl
              label="Border Color"
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Border Radius</span>
            <Device
              device={image.borderRadiusDevice}
              onChange={(value) =>
                setAttributes({
                  image: { ...image, borderRadiusDevice: value },
                })
              }
            />
          </div>
          {image.borderRadiusDevice === 'desktop' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              isUnitSelectTabbable
              value={image.borderRadius.desktop}
              min={0}
              max={100}
              onChange={(value) =>
                setAttributes({
                  image: {
                    ...image,
                    borderRadius: { ...image.borderRadius, desktop: value },
                  },
                })
              }
            />
          )}
          {image.borderRadiusDevice === 'tablet' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={0}
              max={100}
              isUnitSelectTabbable
              value={image.borderRadius.tablet}
              onChange={(value) =>
                setAttributes({
                  image: {
                    ...image,
                    borderRadius: { ...image.borderRadius, tablet: value },
                  },
                })
              }
            />
          )}
          {image.borderRadiusDevice === 'mobile' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={0}
              max={100}
              isUnitSelectTabbable
              value={image.borderRadius.mobile}
              onChange={(value) =>
                setAttributes({
                  image: {
                    ...image,
                    borderRadius: { ...image.borderRadius, mobile: value },
                  },
                })
              }
            />
          )}
        </div>

        <PanelShadow
          label="Box Shadow"
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
