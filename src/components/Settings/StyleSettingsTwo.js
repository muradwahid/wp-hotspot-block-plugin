import {Fragment} from 'react';
import { PanelBody,__experimentalUnitControl as UnitControl,__experimentalBoxControl as BoxControl, PanelRow, SelectControl} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { BDevice, MultiShadowControl } from '../../../../Components';
import PanelColorControl from '../panel/PanelColorControl/PanelColorControl';
import IncludeExClude from '../panel/IncludeExClude/IncludeExClude';

const StyleSettingsTwo = ({ attributes, setAttributes }) => {
  const { spotstwo, tooltiptwo } = attributes;
  return (
    <Fragment>
      <PanelBody initialOpen={false} title={__('Spots', 'hotspot-block')}>
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
              device={spotstwo.widthDevice}
              onChange={(value) =>
                setAttributes({
                  spotstwo: { ...spotstwo, widthDevice: value },
                })
              }
            />
          </div>
          {spotstwo.widthDevice === 'desktop' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              isUnitSelectTabbable
              value={spotstwo.width.desktop}
              min={1}
              max={100}
              onChange={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    width: { ...spotstwo.width, desktop: value },
                  },
                })
              }
            />
          )}
          {spotstwo.widthDevice === 'tablet' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={1}
              max={100}
              isUnitSelectTabbable
              value={spotstwo.width.tablet}
              onChange={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    width: { ...spotstwo.width, tablet: value },
                  },
                })
              }
            />
          )}
          {spotstwo.widthDevice === 'mobile' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={1}
              max={100}
              isUnitSelectTabbable
              value={spotstwo.width.mobile}
              onChange={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    width: { ...spotstwo.width, mobile: value },
                  },
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
              device={spotstwo.heightDevice}
              onChange={(value) =>
                setAttributes({
                  spotstwo: { ...spotstwo, heightDevice: value },
                })
              }
            />
          </div>
          {spotstwo.heightDevice === 'desktop' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              isUnitSelectTabbable
              value={spotstwo.height.desktop}
              min={1}
              max={100}
              onChange={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    height: { ...spotstwo.height, desktop: value },
                  },
                })
              }
            />
          )}
          {spotstwo.heightDevice === 'tablet' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={1}
              max={100}
              isUnitSelectTabbable
              value={spotstwo.height.tablet}
              onChange={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    height: { ...spotstwo.height, tablet: value },
                  },
                })
              }
            />
          )}
          {spotstwo.heightDevice === 'mobile' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={1}
              max={100}
              isUnitSelectTabbable
              value={spotstwo.height.mobile}
              onChange={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    height: { ...spotstwo.height, mobile: value },
                  },
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
            <span>Icon Size</span>
            <BDevice
              device={spotstwo.iconSizeDevice}
              onChange={(value) =>
                setAttributes({
                  spotstwo: { ...spotstwo, iconSizeDevice: value },
                })
              }
            />
          </div>
          {spotstwo.iconSizeDevice === 'desktop' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              isUnitSelectTabbable
              value={spotstwo.iconSize.desktop}
              min={1}
              max={100}
              onChange={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    iconSize: { ...spotstwo.iconSize, desktop: value },
                  },
                })
              }
            />
          )}
          {spotstwo.iconSizeDevice === 'tablet' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={1}
              max={100}
              isUnitSelectTabbable
              value={spotstwo.iconSize.tablet}
              onChange={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    iconSize: { ...spotstwo.iconSize, tablet: value },
                  },
                })
              }
            />
          )}
          {spotstwo.iconSizeDevice === 'mobile' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={1}
              max={100}
              isUnitSelectTabbable
              value={spotstwo.iconSize.mobile}
              onChange={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    iconSize: { ...spotstwo.iconSize, mobile: value },
                  },
                })
              }
            />
          )}
        </div>

        <div style={{ position: 'relative', marginTop: '20px' }}>
          <BDevice
            style={{ position: 'absolute', left: '60px' }}
            device={spotstwo.paddingDevice}
            onChange={(value) =>
              setAttributes({ spotstwo: { ...spotstwo, paddingDevice: value } })
            }
          />
          {spotstwo.paddingDevice === 'desktop' && (
            <BoxControl
              label="Padding"
              values={spotstwo.padding.desktop}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    padding: { ...spotstwo.padding, desktop: value },
                  },
                })
              }
            />
          )}
          {spotstwo.paddingDevice === 'tablet' && (
            <BoxControl
              label="Padding"
              values={spotstwo.padding.tablet}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    padding: { ...spotstwo.padding, tablet: value },
                  },
                })
              }
            />
          )}
          {spotstwo.paddingDevice === 'mobile' && (
            <BoxControl
              label="Padding"
              values={spotstwo.padding.mobile}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    padding: { ...spotstwo.padding, mobile: value },
                  },
                })
              }
            />
          )}
        </div>

        <div className="mt-10">
          <PanelRow>
            <span>Border Type</span>
            <SelectControl
              value={spotstwo.borderType}
              options={[
                { label: 'None', value: 'none' },
                { label: 'Solid', value: 'solid' },
                { label: 'Double', value: 'double' },
                { label: 'Dotted', value: 'dotted' },
                { label: 'Dashed', value: 'dashed' },
                { label: 'Groove', value: 'groove' },
              ]}
              onChange={(value) =>
                setAttributes({ spotstwo: { ...spotstwo, borderType: value } })
              }
            />
          </PanelRow>
        </div>

        {spotstwo.borderType !== 'none' && (
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
                  device={spotstwo.borderWidthDevice}
                  onChange={(value) =>
                    setAttributes({
                      spotstwo: { ...spotstwo, borderWidthDevice: value },
                    })
                  }
                />
              </div>
              {spotstwo.borderWidthDevice === 'desktop' && (
                <UnitControl
                  style={{ width: '60px' }}
                  units={['%']}
                  isUnitSelectTabbable
                  value={spotstwo.borderWidth.desktop}
                  min={0}
                  max={50}
                  onChange={(value) =>
                    setAttributes({
                      spotstwo: {
                        ...spotstwo,
                        borderWidth: {
                          ...spotstwo.borderWidth,
                          desktop: value,
                        },
                      },
                    })
                  }
                />
              )}
              {spotstwo.borderWidthDevice === 'tablet' && (
                <UnitControl
                  style={{ width: '60px' }}
                  units={['%']}
                  min={0}
                  max={50}
                  isUnitSelectTabbable
                  value={spotstwo.borderWidth.tablet}
                  onChange={(value) =>
                    setAttributes({
                      spotstwo: {
                        ...spotstwo,
                        borderWidth: { ...spotstwo.borderWidth, tablet: value },
                      },
                    })
                  }
                />
              )}
              {spotstwo.borderWidthDevice === 'mobile' && (
                <UnitControl
                  style={{ width: '60px' }}
                  units={['%']}
                  min={0}
                  max={50}
                  isUnitSelectTabbable
                  value={spotstwo.borderWidth.mobile}
                  onChange={(value) =>
                    setAttributes({
                      spotstwo: {
                        ...spotstwo,
                        borderWidth: { ...spotstwo.borderWidth, mobile: value },
                      },
                    })
                  }
                />
              )}
            </div>
            <PanelColorControl
              label="Border Color"
              value={spotstwo.borderColor}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({ spotstwo: { ...spotstwo, borderColor: value } })
              }
            />
          </Fragment>
        )}

        <div style={{ position: 'relative', marginTop: '20px' }}>
          <BDevice
            style={{ position: 'absolute', left: '90px' }}
            device={spotstwo.borderRadiusDevice}
            onChange={(value) =>
              setAttributes({
                spotstwo: { ...spotstwo, borderRadiusDevice: value },
              })
            }
          />
          {spotstwo.borderRadiusDevice === 'desktop' && (
            <BoxControl
              label="Border Radius"
              values={spotstwo.borderRadius.desktop}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    borderRadius: { ...spotstwo.borderRadius, desktop: value },
                  },
                })
              }
            />
          )}
          {spotstwo.borderRadiusDevice === 'tablet' && (
            <BoxControl
              label="Border Radius"
              values={spotstwo.borderRadius.tablet}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    borderRadius: { ...spotstwo.borderRadius, tablet: value },
                  },
                })
              }
            />
          )}
          {spotstwo.borderRadiusDevice === 'mobile' && (
            <BoxControl
              label="Border Radius"
              values={spotstwo.borderRadius.mobile}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    borderRadius: { ...spotstwo.borderRadius, mobile: value },
                  },
                })
              }
            />
          )}
        </div>

        <IncludeExClude
          options={['normal', 'hover']}
          value={spotstwo.hover}
          renderFunction={(value) =>
            setAttributes({ spotstwo: { ...spotstwo, hover: value } })
          }
        />
        {spotstwo.hover === 'normal' && (
          <Fragment>
            <PanelColorControl
              label="Text Color"
              value={spotstwo.iconColor}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({ spotstwo: { ...spotstwo, iconColor: value } })
              }
            />
            <PanelColorControl
              label="Background Color"
              value={spotstwo.bgColor}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({ spotstwo: { ...spotstwo, bgColor: value } })
              }
            />
          </Fragment>
        )}
        {spotstwo.hover === 'hover' && (
          <Fragment>
            <PanelColorControl
              label="Text Color"
              value={spotstwo.hoverColor.icon}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    hoverColor: { ...spotstwo.hoverColor, icon: value },
                  },
                })
              }
            />
            <PanelColorControl
              label="Background Color"
              value={spotstwo.hoverColor.bg}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    hoverColor: { ...spotstwo.hoverColor, bg: value },
                  },
                })
              }
            />
            <PanelColorControl
              label="Border Color"
              value={spotstwo.hoverColor.border}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({
                  spotstwo: {
                    ...spotstwo,
                    hoverColor: { ...spotstwo.hoverColor, border: value },
                  },
                })
              }
            />
          </Fragment>
        )}
      </PanelBody>
      <PanelBody initialOpen={true} title={__('Tooltip', 'hotspot-block')}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>Width</span>
          <UnitControl
            style={{ width: '92px' }}
            units={['px']}
            isUnitSelectTabbable
            value={tooltiptwo.width}
            min={1}
            max={800}
            onChange={(value) =>
              setAttributes({
                tooltiptwo: {
                  ...tooltiptwo,
                  width: value,
                },
              })
            }
          />
        </div>
        <div style={{ position: 'relative', marginTop: '20px' }}>
          <BDevice
            style={{ position: 'absolute', left: '60px' }}
            device={tooltiptwo.paddingDevice}
            onChange={(value) =>
              setAttributes({
                tooltiptwo: { ...tooltiptwo, paddingDevice: value },
              })
            }
          />
          {tooltiptwo.paddingDevice === 'desktop' && (
            <BoxControl
              label="Padding"
              values={tooltiptwo.padding.desktop}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  tooltiptwo: {
                    ...tooltiptwo,
                    padding: { ...tooltiptwo.padding, desktop: value },
                  },
                })
              }
            />
          )}
          {tooltiptwo.paddingDevice === 'tablet' && (
            <BoxControl
              label="Padding"
              values={tooltiptwo.padding.tablet}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  tooltiptwo: {
                    ...tooltiptwo,
                    padding: { ...tooltiptwo.padding, tablet: value },
                  },
                })
              }
            />
          )}
          {tooltiptwo.paddingDevice === 'mobile' && (
            <BoxControl
              label="Padding"
              values={tooltiptwo.padding.mobile}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  tooltiptwo: {
                    ...tooltiptwo,
                    padding: { ...tooltiptwo.padding, mobile: value },
                  },
                })
              }
            />
          )}
        </div>

        <div style={{ position: 'relative', marginTop: '20px' }}>
          <BDevice
            style={{ position: 'absolute', left: '60px' }}
            device={tooltiptwo.borderRadiusDevice}
            onChange={(value) =>
              setAttributes({
                tooltiptwo: { ...tooltiptwo, borderRadiusDevice: value },
              })
            }
          />
          {tooltiptwo.borderRadiusDevice === 'desktop' && (
            <BoxControl
              label="Border Radius"
              values={tooltiptwo.borderRadius.desktop}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  tooltiptwo: {
                    ...tooltiptwo,
                    borderRadius: {
                      ...tooltiptwo.borderRadius,
                      desktop: value,
                    },
                  },
                })
              }
            />
          )}
          {tooltiptwo.borderRadiusDevice === 'tablet' && (
            <BoxControl
              label="Border Radius"
              values={tooltiptwo.borderRadius.tablet}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  tooltiptwo: {
                    ...tooltiptwo,
                    borderRadius: { ...tooltiptwo.borderRadius, tablet: value },
                  },
                })
              }
            />
          )}
          {tooltiptwo.borderRadiusDevice === 'mobile' && (
            <BoxControl
              label="Border Radius"
              values={tooltiptwo.borderRadius.mobile}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  tooltiptwo: {
                    ...tooltiptwo,
                    borderRadius: { ...tooltiptwo.borderRadius, mobile: value },
                  },
                })
              }
            />
          )}
        </div>

        <PanelColorControl
          label="Text Color"
          value={tooltiptwo.textColor}
          colors={[
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
          ]}
          renderFunction={(value) =>
            setAttributes({ tooltiptwo: { ...tooltiptwo, textColor: value } })
          }
        />
        <PanelColorControl
          label="Background Color"
          value={tooltiptwo.bgColor}
          colors={[
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
          ]}
          renderFunction={(value) =>
            setAttributes({ tooltiptwo: { ...tooltiptwo, bgColor: value } })
          }
        />

        <MultiShadowControl
          label="Box Shadow"
          value={tooltiptwo.boxShadow}
          onChange={(value) =>
            setAttributes({ tooltiptwo: { ...tooltiptwo, boxShadow: value } })
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
    </Fragment>
  );
};

export default StyleSettingsTwo;