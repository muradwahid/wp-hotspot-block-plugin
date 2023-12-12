import { MediaUpload } from '@wordpress/block-editor';
// import './__mediaArea.scss';
import { FaRegTrashAlt } from 'react-icons/fa';
const MediaArea = ({ image, renderFunction, default: defaults }) => {
  return (
    <>
      <style>
        {`
          .media-area-container {
	cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 110px;
  .media-bottom {
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    text-align: center;
    background: #161616;
    color: white;
    padding: 5px 0;
    transition: all 0.3s ease-in-out;
  }
  .media-delete {
    position: absolute;
    right: 10px;
    top: 10px;
    background: #161616;
    padding: 3px 6px;
		display: none;
    color: white;
  }
}
.media-area-container:hover {
  .media-bottom {
    bottom: 0;
  }
	.media-delete{
		display: block;
	}
}
          `}
      </style>
      <div>
        <MediaUpload
          gallery={true}
          onSelect={(value) => renderFunction(value)}
          value={image}
          allowedTypes={['image']}
          render={({ open }) => (
            <div className="media-area-container">
              <img
                onClick={open}
                className="media-area-image"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src={image}
                alt=""
              />
              <div
                onClick={() => renderFunction(defaults)}
                className="media-delete"
              >
                <FaRegTrashAlt />
              </div>
              <div onClick={open} className="media-bottom">
                <span>Choose Image</span>
              </div>
            </div>
          )}
          multiple={false}
        />
      </div>
    </>
  );
};

export default MediaArea;
