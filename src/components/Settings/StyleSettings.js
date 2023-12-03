import {
  __experimentalBoxControl as BoxControl,
  PanelBody,
  PanelRow,
  SelectControl,
  __experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from 'react';
import { BDevice, MultiShadowControl } from '../../../../Components';
import PanelColorControl from '../panel/PanelColorControl/PanelColorControl';
import StyleSettingsOne from './StyleSettingsOne';
import StyleSettingsTwo from './StyleSettingsTwo';
const StyleSettings = ({ attributes, setAttributes }) => {
  const { image, preset} = attributes;
  return (
    <Fragment>
      <PanelBody initialOpen={false} title={__('Image', 'hotspot-block')}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Width</span>
            <BDevice
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
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Height</span>
            <BDevice
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
        </div>
        <div style={{ position: 'relative', marginTop: '20px' }}>
          <BDevice
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
                <BDevice
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
            <BDevice
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

        <MultiShadowControl
          label="Box Shadow"
          value={image.boxShadow}
          onChange={(value) =>
            setAttributes({ image: { ...image, boxShadow: value } })
          }
          defaults={[
            {
              hOffset: '0px',
              vOffset: '0px',
              blur: '0px',
              spread: '0px',
              color: '',
            },
          ]}
        />
      </PanelBody>
      {preset === 1 && (
        <StyleSettingsOne
          attributes={attributes}
          setAttributes={setAttributes}
        />
      )}
      {preset === 2 && (
        <StyleSettingsTwo
          attributes={attributes}
          setAttributes={setAttributes}
        />
      )}
    </Fragment>
  );
};
export default StyleSettings;
