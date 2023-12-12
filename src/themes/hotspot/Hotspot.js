import { produce } from 'immer';
import {Fragment} from 'react';
import Draggable from './Draggable';
import HotspotStyle from '../../conponents/Style/HotspotStyle';
import placeholderImg from '../../../assets/images/placeholder.png';
const Hotspot = ({ attributes, setAttributes,activeIdx,setActiveIdx }) => {
  const { themeone, image, preset } = attributes;
  
  return (
    <Fragment>
      <HotspotStyle attributes={attributes} />
      <div
        style={{
          background: `url(${image.url || placeholderImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'local',
        }}
        className="hotspot-image-wrapper"
      >
        {themeone.map((el, i) => (
          <Draggable
            key={i}
            value={el.position}
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
            preset={preset}
            element={el}
            index={i}
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
    </Fragment>
  );
};

export default Hotspot;
