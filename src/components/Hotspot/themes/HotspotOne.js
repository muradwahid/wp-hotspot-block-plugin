import { produce } from 'immer';
import React from 'react';
import HotspotStyle from '../../Style/HotspotStyle';
import Draggable from './Draggable';

const HotspotOne = ({ attributes, setAttributes }) => {
  const { themeone, image, preset } = attributes;
  return (
    <div>
      <HotspotStyle attributes={attributes} />
      <div className="hotspot-image-wrapper">
        <img className="hotspot-image" src={image.url} alt="" />
        {themeone.map((el, i) => (
          <Draggable
            key={i}
            value={el.position}
            preset={preset}
            element={el}
            onChange={(val) =>
              setAttributes({
                themeone: produce(themeone, (draft) => {
                  draft[i].position = val;
                }),
              })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default HotspotOne;
