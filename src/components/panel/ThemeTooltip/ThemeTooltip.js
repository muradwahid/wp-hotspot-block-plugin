import { Editor } from '@tinymce/tinymce-react';
import { Button } from '@wordpress/components';
import { useEffect, useRef, useState } from 'react';

const ThemeTooltip = ({ element, onChange = () => {} }) => {
  const editorRef = useRef(null);
  const [tooltip, setTooltip] = useState('');

  const log = () => {
    if (editorRef.current) {
      setTooltip(editorRef.current.getContent());
    }
  };
  useEffect(() => {
    onChange(tooltip);
  }, [tooltip]);
  return (
    <div className="editor-wrapper">
      <Editor
        apiKey="d1lxc40qcx6ad71i4bn1ih4d8l8oalalg9efymoc5l3ay9qo"
        onChange={(evt, editor) => setTooltip(editor.getContent())}
        init={{
          selector: 'textarea',
          menubar: false,
          plugins: [
            'lists link image charmap',
            'visualblocks fullscreen',
            'media paste',
          ],
          toolbar:
            'undo redo formatselect bold italic image alignleft aligncenter alignright alignjustify bullist numlist outdent indent removeformat',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
      <Button style={{ margin: '10px 0' }} variant="primary" onClick={log}>
        Submit
      </Button>
    </div>
  );
};

export default ThemeTooltip;
