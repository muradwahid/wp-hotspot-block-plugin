import {
  Button,
  __experimentalNumberControl as NumberControl,
  PanelBody,
  PanelRow,
  __experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import { Fragment } from 'react';
import placeholderImg from '../../../assets/images/placeholder.png';
import {
  defaultTheme,
  themeFive,
  themeFour,
  themeThree,
  themeTwo,
  themeoneNewItem,
} from '../../utils/options';
import {
  tooltipFive,
  tooltipFour,
  tooltipOne,
  tooltipThree,
  tooltipTwo,
} from '../../utils/tooltipOptions';
import MediaArea from '../Panel/MediaArea/MediaArea';
import Presets from '../Panel/Presets/Presets';
import SpotsItems from '../Panel/SpotsItems/SpotsItems';
const Settings = ({ attributes, setAttributes, activeIdx, setActiveIdx }) => {
  // eslint-disable-next-line no-unused-vars
  const { themeone, image, options, preset, spotsone, tooltipone } = attributes;
  const handleAddNewItem = () => {
    const newItem = [...themeone];
    newItem.push(themeoneNewItem);
    setAttributes({ themeone: newItem });
  };
  const handleDelete = (index) => {
    setAttributes({
      themeone: themeone.filter((el, i) => i !== index),
    });
  };
  const handleCopy = (item) => {
    const newItem = [...themeone];
    newItem.push(item);
    setAttributes({ themeone: newItem });
  };
  // const spotActive = themeone[activeIdx];
  return (
    <Fragment>
      <PanelBody initialOpen={true} title={__('Image', 'b-blocks')}>
        <MediaArea
          image={image.url || placeholderImg}
          default={{ url: placeholderImg }}
          renderFunction={(value) =>
            setAttributes({
              image: {
                ...image,
                url: value.url,
              },
            })
          }
        />
        <p style={{ marginTop: '20px' }}>Image Size</p>
        <PanelRow>
          <span>{__("Width", "b-blocks")}</span>
          <UnitControl
            style={{ width: "80px" }}
            value={image.width.desktop}
            units={[{ label: "%", value: "%" }]}
            min={1}
            max={100}
            onChange={(value) =>
              setAttributes({
                image: {
                  ...image,
                  width: {
                    ...image.width,
                    desktop: value,
                    tablet: value,
                    mobile: value,
                  },
                },
              })
            }
          />
        </PanelRow>
        <PanelRow>
          <span>{__("Height", "b-blocks")}</span>
          <UnitControl
            style={{ width: "80px" }}
            value={image.height.desktop}
            units={[{ label: "px", value: "px" }]}
            onChange={(value) =>
              setAttributes({
                image: {
                  ...image,
                  height: {
                    ...image.height,
                    desktop: value,
                    tablet: value,
                    mobile: value,
                  },
                },
              })
            }
          />
        </PanelRow>
      </PanelBody>
      <PanelBody initialOpen={false} title={__('Spots', 'b-blocks')}>
        {/* {
          <SpotsItems
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
            element={spotActive}
            handleDelete={handleDelete}
            handleCopy={handleCopy}
            attributes={attributes}
            setAttributes={setAttributes}
            onChange={(value) =>
              setAttributes({
                themeone: produce(themeone, (draft) => {
                  draft[activeIdx] = value;
                }),
              })
            }
            index={activeIdx}
          />
        } */}
        {themeone.map((el, i) => (
          <SpotsItems
            key={i}
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
            element={el}
            handleDelete={handleDelete}
            handleCopy={handleCopy}
            attributes={attributes}
            setAttributes={setAttributes}
            onChange={(value) =>
              setAttributes({
                themeone: produce(themeone, (draft) => {
                  draft[i] = value;
                }),
              })
            }
            index={i}
          />
        ))}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px 0',
          }}
        >
          <Button
            onClick={() => handleAddNewItem()}
            variant="primary"
            icon="plus"
          >
            {__("Add Item", "b-blocks")}
          </Button>
        </div>
      </PanelBody>
      <PanelBody title={__('Options', 'b-blocks')} initialOpen={false}>
        <PanelRow>
          <span>{__("Speed", "b-blocks")}</span>
          <NumberControl
            onChange={(value) =>
              setAttributes({ options: { ...options, speed: value } })
            }
            isDragEnabled
            isShiftStepEnabled
            shiftStep={10}
            step={1}
            min={100}
            value={Number(options.speed)}
          />
        </PanelRow>
        <PanelRow>
          <span>{__("Delay", "b-blocks")}</span>
          <NumberControl
            onChange={(value) =>
              setAttributes({ options: { ...options, delay: value } })
            }
            isDragEnabled
            isShiftStepEnabled
            shiftStep={10}
            step={1}
            min={100}
            value={Number(options.delay)}
          />
        </PanelRow>
      </PanelBody>
      <PanelBody initialOpen={false} title={__('Presets', 'b-blocks')}>
        <span>Design</span>
        <Presets
          value={preset}
          themes={[
            'https://i.ibb.co/tPN6T78/themeone.png',
            'https://i.ibb.co/vjBYyf6/themetwo.png',
            'https://i.ibb.co/NF1hmL1/themethree.png',
            'https://i.ibb.co/ydCkBVt/themefour.png',
            'https://i.ibb.co/tJkZ98X/themefive.png',
          ]}
          render={(value) =>
            setAttributes({
              preset: value,
              spotsone:
                value === 1
                  ? defaultTheme
                  : value === 2
                    ? themeTwo
                    : value === 3
                      ? themeThree
                      : value === 4
                        ? themeFour
                        : themeFive,
              tooltipone:
                value === 1
                  ? tooltipOne
                  : value === 2
                    ? tooltipTwo
                    : value === 3
                      ? tooltipThree
                      : value === 4
                        ? tooltipFour
                        : tooltipFive,
            })
          }
        />
      </PanelBody>
    </Fragment>
  );
};

export default Settings;
