import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useState } from 'react';
import TabPanel from './conponents/Panel/TabPanel/TabPanel';
import Settings from './conponents/Settings/Settings';
import StyleSettings from './conponents/Settings/StyleSettings';
import Hotspot from './themes/hotspot/Hotspot';
const Edit = (props) => {
  const [tab, setTab] = useState('content');
  const [activeIdx, setActiveIdx] = useState(0);
  const { className, setAttributes, clientId, attributes } = props;
  const { cId } = attributes;
  useEffect(() => {
    clientId && setAttributes({ cId: clientId.substring(0, 10) });
  }, [clientId]); // Set & Update clientId to cId
  return (
    <div className={className} id={`bphb-hotspot-block-${cId}`}>
      <InspectorControls>
        <TabPanel tab={tab} setTab={setTab} />
        {tab === 'content' && (
          <Settings
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
            attributes={attributes}
            setAttributes={setAttributes}
          />
        )}
        {tab === 'style' && (
          <StyleSettings
            attributes={attributes}
            setAttributes={setAttributes}
          />
        )}
      </InspectorControls>
      <Hotspot
        activeIdx={activeIdx}
        setActiveIdx={setActiveIdx}
        attributes={attributes}
        setAttributes={setAttributes}
      />
    </div>
  );
};
export default Edit;
