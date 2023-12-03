import { useEffect,useState} from 'react';
import { InspectorControls } from '@wordpress/block-editor';
import HotspotOne from './components/Hotspot/themes/HotspotOne';
import Settings from './components/Settings/Settings';
import TabPanel from './components/panel/TabPanel/TabPanel';
import StyleSettings from './components/Settings/StyleSettings';
const Edit = (props) => {
  const [tab,setTab]=useState('content')
  const { className, setAttributes, clientId, attributes } = props;
  useEffect(() => {
    clientId && setAttributes({ cId: clientId.substring(0, 10) });
  }, [clientId]); // Set & Update clientId to cId
  return (
    <div className={className} id={`hbHelloBlock-${clientId}`}>
      <InspectorControls>
        <TabPanel tab={tab} setTab={setTab} />
        {tab === 'content' && (
          <Settings attributes={attributes} setAttributes={setAttributes} />
        )}
        {
          tab === 'style' && (
            <StyleSettings attributes={attributes} setAttributes={setAttributes} />
          )
        }
      </InspectorControls>
      <div>
        {/* <Hotspot_One attributes={attributes} setAttributes={setAttributes} /> */}
        <HotspotOne attributes={attributes} setAttributes={setAttributes} />
      </div>
    </div>
  );
};
export default Edit;
