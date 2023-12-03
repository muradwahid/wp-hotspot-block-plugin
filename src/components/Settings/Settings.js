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
import { themeoneNewItem } from '../../utils/options';
import MediaArea from '../panel/MediaArea';
import SpotsItems from '../panel/SpotsItems/SpotsItems';
import Presets from '../panel/Presets/Presets';

const Settings = ({ attributes, setAttributes }) => {
  const { themeone, image, options, preset } = attributes;
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
  return (
    <Fragment>
      <PanelBody
        initialOpen={true}
        className="bPlPanelBody"
        title={__('Image', 'hotspot-block')}
      >
        <MediaArea
          image={image.url}
          default={{ url: 'https://i.ibb.co/8Y5LPWv/placeholder.png' }}
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
            <UnitControl
              label="Width"
            value={image.width.desktop}
            units={["%"]}
              onChange={(value) =>
                setAttributes({ image: { ...image, width: {...image.width, desktop: value,tablet:value,mobile:value} } })
              }
            />
            <UnitControl
              label="Height"
            value={image.height.desktop}
            units={['px']}
              onChange={(value) =>
                setAttributes({ image: { ...image, height: {...image.height, desktop: value,tablet:value,mobile:value} } })
              }
            />
          </PanelRow>
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        initialOpen={false}
        title={__('Spots', 'hotspot-block')}
      >
        {themeone.map((el, i) => (
          <SpotsItems
            key={i}
            element={el}
            handleDelete={handleDelete}
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
            Add Item
          </Button>
        </div>
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__('Options', 'hotspot-block')}
        initialOpen={false}
      >
        <PanelRow>
          <span>Speed</span>
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
          <span>Delay</span>
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
      <PanelBody initialOpen={false} title={__('Presets', 'hotspot-block')}>
        <span>Design</span>
        <Presets
          value={preset}
          render={(value) => setAttributes({ preset: value })}
        />
      </PanelBody>
    </Fragment>
  );
};

export default Settings;
