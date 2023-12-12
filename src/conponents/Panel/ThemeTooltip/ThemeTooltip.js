/* eslint-disable no-unused-vars */
import { Editor } from '@tinymce/tinymce-react';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useEffect, useRef, useState } from 'react';

const ThemeTooltip = ({ element, onChange = () => {} }) => {
  const editorRef = useRef(null);
  const [tooltip, setTooltip] = useState('');
  const [media, setMedia] = useState('');
  const [initialValue, setInitialValue] = useState(element.tooltip);

  const log = () => {
    if (editorRef.current) {
      setTooltip(editorRef.current.getContent());
    }
  };


    useEffect(() => {
      const iframe = document?.querySelector('iframe');
      const iframeContent =
        iframe.contentDocument || iframe.contentWindow.document;
      const tinymce = iframeContent.querySelector('.mce-content-body');
      const createImgEl = document.createElement('img');
      createImgEl.src = media.url;
      createImgEl.style.maxWidth = '100%';
      createImgEl.style.maxHeight = '100%';
      tinymce?.appendChild(createImgEl);
    }, [media.url]);


  useEffect(() => {
    onChange(tooltip);
  }, [tooltip]);

  useEffect(() => {
    setTooltip(element.tooltip);
  }, []);
  return (
    <div className="editor-wrapper">
      <MediaUploadCheck>
        <MediaUpload
          gallery={true}
          onSelect={(value) => setMedia(value)}
          allowedTypes={['image']}
          render={({ open }) => (
            <button className="custom-tinymce-button" onClick={open}>
              <span className="dashicons dashicons-admin-media"></span>
              Add Media
            </button>
          )}
          multiple={false}
        />
      </MediaUploadCheck>
      <Editor
        apiKey="d1lxc40qcx6ad71i4bn1ih4d8l8oalalg9efymoc5l3ay9qo"
        onChange={(evt, editor) => setTooltip(editor.getContent())}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        init={{
          height: 180,
          selector: 'textarea',
          menubar: false,
          plugins: ['lists link image charmap', 'fullscreen', 'media paste'],
          toolbar:
            'undo redo formatselect bold italic link alignleft aligncenter alignright alignjustify bullist numlist outdent indent removeformat specilchar fullscreen',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button style={{ margin: '10px 0' }} variant="primary" onClick={log}>
          Apply
        </Button>
      </div>
    </div>
  );
};

export default ThemeTooltip;
