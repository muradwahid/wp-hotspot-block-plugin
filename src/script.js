import './style.scss';
import { createRoot } from 'react-dom/client';
import HotspotFront from './themes/hotspotFront/hotspotFront';
// Block Name
function FrontEnd({attributes}) {
	return (
		<>
			<HotspotFront attributes={attributes} />
    </>
  );
}

const container = document.querySelectorAll('.wp-block-bphb-hello');
container?.forEach(ele => {
	const attributes = JSON.parse(ele.dataset.attributes);
	const root = createRoot(ele);
	root.render(<FrontEnd attributes={attributes} />);
	ele?.removeAttribute('data-attributes');
})