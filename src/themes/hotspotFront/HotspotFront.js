import { Fragment } from 'react';
import HotspotStyle from '../../conponents/Style/HotspotStyle';
import SVG from 'react-inlinesvg';
import placeholderImg from '../../../assets/images/placeholder.png';
const HotspotFront = ({ attributes }) => {
  const { themeone, image, preset,cId} = attributes;
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
        {themeone.map((element) => (
          <>
            {element.spotOption === 1 && (
              <a
                {...(element.spotLink ? { href: element.spotLink } : {})}
                target={`${element.newWindow ? '_blank' : ''}`}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: `${element.position.x}px`,
                    top: `${element.position.y}px`,
                    cursor: 'pointer',
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
                    {element.tooltip && (
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
                    )}

                    <span>{element.spotText}</span>
                  </div>
                </div>
              </a>
            )}
            {element.spotOption === 2 && (
              <a
                {...(element.spotLink ? { href: element.spotLink } : {})}
                target={`${element.newWindow ? '_blank' : ''}`}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: `${element.position.x}px`,
                    top: `${element.position.y}px`,
                    cursor: 'pointer',
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
                    {element.tooltip && (
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
                        } tooltip-${element.tooltipPosition}`}
                      >
                        <div
                          className="bphb-tooltip-content"
                          dangerouslySetInnerHTML={{ __html: element.tooltip }}
                        ></div>
                      </div>
                    )}

                    <SVG src={element.icon} height="auto" />
                  </div>
                </div>
              </a>
            )}
            {element.spotOption === 3 && (
              <a
                {...(element.spotLink ? { href: element.spotLink } : {})}
                target={`${element.newWindow ? '_blank' : ''}`}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: `${element.position.x}px`,
                    top: `${element.position.y}px`,
                    cursor: 'pointer',
                  }}
                >
                  <div
                    className={`hotspotone  ${
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
                    {element.tooltip && (
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
                        } tooltip-${element.tooltipPosition}`}
                      >
                        <div
                          className="bphb-tooltip-content"
                          dangerouslySetInnerHTML={{ __html: element.tooltip }}
                        ></div>
                      </div>
                    )}

                    <img
                      src={element.image}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 'inherit',
                        objectFit: 'pointer',
                      }}
                      alt=""
                    />
                  </div>
                </div>
              </a>
            )}
          </>
        ))}
      </div>
    </Fragment>
  );
};

export default HotspotFront;
