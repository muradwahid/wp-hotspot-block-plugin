import { useEffect, useRef, useState } from 'react';

const Draggable = ({
  value,
  onChange = () => {},
  preset,
  element,
  ...props
}) => {
  const [position, setPosition] = useState(value || { x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const circleRef = useRef(null);
  useEffect(() => {
    const element = circleRef.current;
    if (!element) return;
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    };
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };
    if (element) {
      element.addEventListener('mousedown', handleMouseDown);
    }
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      if (element) {
        element.removeEventListener('mousedown', handleMouseDown);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    onChange(position);
  }, [position]);

  return (
    <>
      {element.spotOption === 1 && (
        <div
          {...props}
          ref={circleRef}
          style={{
            position: 'absolute',
            left: `${element.position.x}px`,
            top: `${element.position.y}px`,
            cursor: 'move',
          }}
        >
          <div
            className={`hotspotone ${
              preset === 1
                ? 'circle'
                : preset === 2
                ? 'two'
                : preset === 3
                ? 'three'
                : preset === 4
                ? 'fourth'
                : 'fifth'
            }`}
          >
            <div
              className={`tooltip-reader ${
                preset === 1
                  ? 'one'
                  : preset === 2
                  ? 'two'
                  : preset === 3
                  ? 'three'
                  : preset === 4
                  ? 'fourth'
                  : 'fifth'
              }  tooltip-${element.tooltipPosition}`}
            >
              <div
                className="bphb-tooltip-content"
                dangerouslySetInnerHTML={{ __html: element.tooltip }}
              ></div>
            </div>
            <span>{element.spotText}</span>
          </div>
        </div>
      )}
      {element.spotOption === 2 && (
        <div
          {...props}
          ref={circleRef}
          style={{
            position: 'absolute',
            left: `${element.position.x}px`,
            top: `${element.position.y}px`,
            cursor: 'move',
          }}
        >
          <div
            className={`hotspotone ${
              preset === 1
                ? 'circle'
                : preset === 2
                ? 'two'
                : preset === 3
                ? 'three'
                : preset === 4
                ? 'fourth'
                : 'fifth'
            }`}
          >
            <div
              className={`tooltip-reader tooltip-${element.tooltipPosition}`}
            >
              <div dangerouslySetInnerHTML={{ __html: element.tooltip }}></div>
            </div>
            <img src={element.icon} alt="" />
          </div>
        </div>
      )}
      {element.spotOption === 3 && (
        <div
          {...props}
          ref={circleRef}
          style={{
            position: 'absolute',
            left: `${position.x}px`,
            top: `${position.y}px`,
            cursor: 'move',
          }}
        >
          <div
            className={`hotspotone ${
              preset === 1
                ? 'circle'
                : preset === 2
                ? 'two'
                : preset === 3
                ? 'three'
                : preset === 4
                ? 'fourth'
                : 'fifth'
            }`}
          >
            <div
              className={`tooltip-reader tooltip-${element.tooltipPosition}`}
            >
              <div dangerouslySetInnerHTML={{ __html: element.tooltip }}></div>
            </div>
            <img
              src={element.image}
              style={{ width: '100%', height: '100%', borderRadius: 'inherit', objectFit: 'cover' }}
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Draggable;
