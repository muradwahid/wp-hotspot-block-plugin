import { MediaUpload } from '@wordpress/block-editor';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import './svgIconCom.scss';
const SvgIconCom = ({ image, renderFunction, label }) => {
  return (
    <>
      <div style={{ margin: '15px 0' }}>
        <MediaUpload
          gallery={true}
          onSelect={(value) => renderFunction(value)}
          value={image}
          allowedTypes={['image']}
          render={({ open }) => (
            <div className="media-area-container">
              {image ? (
                <img
                  onClick={open}
                  className="media-area-image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  src={image}
                  alt=""
                />
              ) : (
                <div onClick={open} className="media-area-svg-add">
                  <FaPlus />
                </div>
              )}
              <div onClick={open} className="media-bottom">
                <span>{label}</span>
              </div>
            </div>
          )}
          multiple={false}
        />
      </div>
    </>
  );
};

export default SvgIconCom;
