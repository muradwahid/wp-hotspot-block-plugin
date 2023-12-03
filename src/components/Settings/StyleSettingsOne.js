import { Fragment } from 'react';
import { PanelBody, __experimentalUnitControl as UnitControl,__experimentalBoxControl as BoxControl, PanelRow, SelectControl } from '@wordpress/components';
import { BDevice, MultiShadowControl } from '../../../../Components';
import { __ } from '@wordpress/i18n';
import PanelColorControl from '../panel/PanelColorControl/PanelColorControl';
import IncludeExclude from '../panel/IncludeExClude/IncludeExClude'

const StyleSettingsOne = ({setAttributes, attributes}) => {
  const { spotsone, tooltipone } = attributes;
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
              device={spotsone.widthDevice}
              onChange={(value) =>
                setAttributes({
                  spotsone: { ...spotsone, widthDevice: value },
                })
              }
            />
          </div>
          {spotsone.widthDevice === 'desktop' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              isUnitSelectTabbable
              value={spotsone.width.desktop}
              min={1}
              max={100}
              onChange={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    width: { ...spotsone.width, desktop: value },
                  },
                })
              }
            />
          )}
          {spotsone.widthDevice === 'tablet' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={1}
              max={100}
              isUnitSelectTabbable
              value={spotsone.width.tablet}
              onChange={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    width: { ...spotsone.width, tablet: value },
                  },
                })
              }
            />
          )}
          {spotsone.widthDevice === 'mobile' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={1}
              max={100}
              isUnitSelectTabbable
              value={spotsone.width.mobile}
              onChange={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    width: { ...spotsone.width, mobile: value },
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
              device={spotsone.heightDevice}
              onChange={(value) =>
                setAttributes({
                  spotsone: { ...spotsone, heightDevice: value },
                })
              }
            />
          </div>
          {spotsone.heightDevice === 'desktop' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              isUnitSelectTabbable
              value={spotsone.height.desktop}
              min={1}
              max={100}
              onChange={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    height: { ...spotsone.height, desktop: value },
                  },
                })
              }
            />
          )}
          {spotsone.heightDevice === 'tablet' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={1}
              max={100}
              isUnitSelectTabbable
              value={spotsone.height.tablet}
              onChange={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    height: { ...spotsone.height, tablet: value },
                  },
                })
              }
            />
          )}
          {spotsone.heightDevice === 'mobile' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={1}
              max={100}
              isUnitSelectTabbable
              value={spotsone.height.mobile}
              onChange={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    height: { ...spotsone.height, mobile: value },
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
              device={spotsone.iconSizeDevice}
              onChange={(value) =>
                setAttributes({
                  spotsone: { ...spotsone, iconSizeDevice: value },
                })
              }
            />
          </div>
          {spotsone.iconSizeDevice === 'desktop' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              isUnitSelectTabbable
              value={spotsone.iconSize.desktop}
              min={1}
              max={100}
              onChange={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    iconSize: { ...spotsone.iconSize, desktop: value },
                  },
                })
              }
            />
          )}
          {spotsone.iconSizeDevice === 'tablet' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={1}
              max={100}
              isUnitSelectTabbable
              value={spotsone.iconSize.tablet}
              onChange={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    iconSize: { ...spotsone.iconSize, tablet: value },
                  },
                })
              }
            />
          )}
          {spotsone.iconSizeDevice === 'mobile' && (
            <UnitControl
              style={{ width: '92px' }}
              units={['%']}
              min={1}
              max={100}
              isUnitSelectTabbable
              value={spotsone.iconSize.mobile}
              onChange={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    iconSize: { ...spotsone.iconSize, mobile: value },
                  },
                })
              }
            />
          )}
        </div>

        <div style={{ position: 'relative', marginTop: '20px' }}>
          <BDevice
            style={{ position: 'absolute', left: '60px' }}
            device={spotsone.paddingDevice}
            onChange={(value) =>
              setAttributes({ spotsone: { ...spotsone, paddingDevice: value } })
            }
          />
          {spotsone.paddingDevice === 'desktop' && (
            <BoxControl
              label="Padding"
              values={spotsone.padding.desktop}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    padding: { ...spotsone.padding, desktop: value },
                  },
                })
              }
            />
          )}
          {spotsone.paddingDevice === 'tablet' && (
            <BoxControl
              label="Padding"
              values={spotsone.padding.tablet}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    padding: { ...spotsone.padding, tablet: value },
                  },
                })
              }
            />
          )}
          {spotsone.paddingDevice === 'mobile' && (
            <BoxControl
              label="Padding"
              values={spotsone.padding.mobile}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    padding: { ...spotsone.padding, mobile: value },
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
                setAttributes({ spotsone: { ...spotsone, borderType: value } })
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
                <span>Border Width</span>
                <BDevice
                  device={spotsone.borderWidthDevice}
                  onChange={(value) =>
                    setAttributes({
                      spotsone: { ...spotsone, borderWidthDevice: value },
                    })
                  }
                />
              </div>
              {spotsone.borderWidthDevice === 'desktop' && (
                <UnitControl
                  style={{ width: '60px' }}
                  units={['%']}
                  isUnitSelectTabbable
                  value={spotsone.borderWidth.desktop}
                  min={0}
                  max={50}
                  onChange={(value) =>
                    setAttributes({
                      spotsone: {
                        ...spotsone,
                        borderWidth: {
                          ...spotsone.borderWidth,
                          desktop: value,
                        },
                      },
                    })
                  }
                />
              )}
              {spotsone.borderWidthDevice === 'tablet' && (
                <UnitControl
                  style={{ width: '60px' }}
                  units={['%']}
                  min={0}
                  max={50}
                  isUnitSelectTabbable
                  value={spotsone.borderWidth.tablet}
                  onChange={(value) =>
                    setAttributes({
                      spotsone: {
                        ...spotsone,
                        borderWidth: { ...spotsone.borderWidth, tablet: value },
                      },
                    })
                  }
                />
              )}
              {spotsone.borderWidthDevice === 'mobile' && (
                <UnitControl
                  style={{ width: '60px' }}
                  units={['%']}
                  min={0}
                  max={50}
                  isUnitSelectTabbable
                  value={spotsone.borderWidth.mobile}
                  onChange={(value) =>
                    setAttributes({
                      spotsone: {
                        ...spotsone,
                        borderWidth: { ...spotsone.borderWidth, mobile: value },
                      },
                    })
                  }
                />
              )}
            </div>
            <PanelColorControl
              label="Border Color"
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
          <BDevice
            style={{ position: 'absolute', left: '90px' }}
            device={spotsone.borderRadiusDevice}
            onChange={(value) =>
              setAttributes({
                spotsone: { ...spotsone, borderRadiusDevice: value },
              })
            }
          />
          {spotsone.borderRadiusDevice === 'desktop' && (
            <BoxControl
              label="Border Radius"
              values={spotsone.borderRadius.desktop}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    borderRadius: { ...spotsone.borderRadius, desktop: value },
                  },
                })
              }
            />
          )}
          {spotsone.borderRadiusDevice === 'tablet' && (
            <BoxControl
              label="Border Radius"
              values={spotsone.borderRadius.tablet}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    borderRadius: { ...spotsone.borderRadius, tablet: value },
                  },
                })
              }
            />
          )}
          {spotsone.borderRadiusDevice === 'mobile' && (
            <BoxControl
              label="Border Radius"
              values={spotsone.borderRadius.mobile}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  spotsone: {
                    ...spotsone,
                    borderRadius: { ...spotsone.borderRadius, mobile: value },
                  },
                })
              }
            />
          )}
        </div>

        <IncludeExclude
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
          <BDevice
            style={{ position: 'absolute', left: '60px' }}
            device={tooltipone.paddingDevice}
            onChange={(value) =>
              setAttributes({
                tooltipone: { ...tooltipone, paddingDevice: value },
              })
            }
          />
          {tooltipone.paddingDevice === 'desktop' && (
            <BoxControl
              label="Padding"
              values={tooltipone.padding.desktop}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  tooltipone: {
                    ...tooltipone,
                    padding: { ...tooltipone.padding, desktop: value },
                  },
                })
              }
            />
          )}
          {tooltipone.paddingDevice === 'tablet' && (
            <BoxControl
              label="Padding"
              values={tooltipone.padding.tablet}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  tooltipone: {
                    ...tooltipone,
                    padding: { ...tooltipone.padding, tablet: value },
                  },
                })
              }
            />
          )}
          {tooltipone.paddingDevice === 'mobile' && (
            <BoxControl
              label="Padding"
              values={tooltipone.padding.mobile}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  tooltipone: {
                    ...tooltipone,
                    padding: { ...tooltipone.padding, mobile: value },
                  },
                })
              }
            />
          )}
        </div>

        <div style={{ position: 'relative', marginTop: '20px' }}>
          <BDevice
            style={{ position: 'absolute', left: '60px' }}
            device={tooltipone.borderRadiusDevice}
            onChange={(value) =>
              setAttributes({
                tooltipone: { ...tooltipone, borderRadiusDevice: value },
              })
            }
          />
          {tooltipone.borderRadiusDevice === 'desktop' && (
            <BoxControl
              label="Border Radius"
              values={tooltipone.borderRadius.desktop}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  tooltipone: {
                    ...tooltipone,
                    borderRadius: {
                      ...tooltipone.borderRadius,
                      desktop: value,
                    },
                  },
                })
              }
            />
          )}
          {tooltipone.borderRadiusDevice === 'tablet' && (
            <BoxControl
              label="Border Radius"
              values={tooltipone.borderRadius.tablet}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  tooltipone: {
                    ...tooltipone,
                    borderRadius: { ...tooltipone.borderRadius, tablet: value },
                  },
                })
              }
            />
          )}
          {tooltipone.borderRadiusDevice === 'mobile' && (
            <BoxControl
              label="Border Radius"
              values={tooltipone.borderRadius.mobile}
              units={['px']}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  tooltipone: {
                    ...tooltipone,
                    borderRadius: { ...tooltipone.borderRadius, mobile: value },
                  },
                })
              }
            />
          )}
        </div>

        <PanelColorControl
          label="Text Color"
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
          label="Background Color"
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

        <MultiShadowControl
          label="Box Shadow"
          value={tooltipone.boxShadow}
          onChange={(value) =>
            setAttributes({ tooltipone: { ...tooltipone, boxShadow: value } })
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

export default StyleSettingsOne;