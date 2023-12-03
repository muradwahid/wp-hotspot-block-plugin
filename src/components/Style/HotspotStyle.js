import {getMultiShadowCSS} from '../../../../Components/utils/getCSS'
const HotspotStyle = ({ attributes }) => {
  const {
    image,
    options,
    spotsone,
    tooltipone,
  } = attributes;
  return (
    <style>
      {`
      .hotspot-image-wrapper{
        position:relative;
        padding-left:${image.paddingDesktop.left};
        padding-right:${image.paddingDesktop.right};
        padding-top:${image.paddingDesktop.top};            
        padding-bottom:${image.paddingDesktop.bottom};
        border:${image.borderWidth.desktop} ${image.border} ${
        image.borderColor
      };
        border-radius:${image.borderRadius.desktop};
        box-shadow: ${getMultiShadowCSS(image.boxShadow)};
      }
      .hotspot-image{
        border-radius:inherit;
      }
      .hotspotone{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        animation: circle 2s infinite;
        position:relative;
      }
      .hotspotone.circle{
        height:${spotsone.height.desktop};
        width: ${spotsone.width.desktop};
        border-radius:${spotsone.borderRadius.desktop.top} ${
        spotsone.borderRadius.desktop.left
      } ${spotsone.borderRadius.desktop.bottom} ${
        spotsone.borderRadius.desktop.right
      };
        background-color: ${spotsone.bgColor};
        padding-left:${spotsone.padding.desktop.left};
        padding-right:${spotsone.padding.desktop.right};
        padding-top:${spotsone.padding.desktop.top};
        padding-bottom:${spotsone.padding.desktop.bottom};
        border:${spotsone.borderWidth.desktop} ${spotsone.borderType} ${
        spotsone.borderColor
      };
      transition:all 0.2s ease-in-out;
      }
      .hotspotone.circle>span{
        color:${spotsone.iconColor};
        font-size:${spotsone.iconSize.desktop};
      }
      .hotspotone.circle:hover{
        background-color: ${spotsone.hoverColor.bg};
        border-color: ${spotsone.hoverColor.border};
      }
      .hotspotone.circle:hover>span{
        color:${spotsone.hoverColor.icon};
      }
      .tooltip-reader{
        position: absolute;
        transition: all ease-in-out;
        transition-duration: ${options.speed}ms;
        transition-delay: ${options.delay}ms;
        cursor: pointer;
      }
      .tooltip-reader.one{
        width:${tooltipone.width};
        background-color: ${tooltipone.bgColor};
        padding-left:${tooltipone.padding.desktop.left};
        padding-right:${tooltipone.padding.desktop.right};
        padding-top:${tooltipone.padding.desktop.top};
        padding-bottom:${tooltipone.padding.desktop.bottom};
        border-radius:${tooltipone.borderRadius.desktop.top} ${
        tooltipone.borderRadius.desktop.left
      } ${tooltipone.borderRadius.desktop.bottom} ${
        tooltipone.borderRadius.desktop.right
      };
        box-shadow:${getMultiShadowCSS(tooltipone.boxShadow)};
      }
      .tooltip-reader.one .bphb-tooltip-content :where(h1,h2,h3,h4,h5,h6,p,span,i,em,strong){
            color: ${tooltipone.textColor};
            margin:0px;
        }
      @keyframes circle {
        0%{
          box-shadow: 0px 0px 0px 0px #00000027;
        }
        75%{
          box-shadow: 0px 0px 0px 0px #00000020;
        }
        100%{
            box-shadow: 0px 0px 0px 24px #00000000;
        }
      }
        .hotspot-image-wrapper>.hotspot-image{
          width: ${image.width.desktop};
          height: ${image.height.desktop};
          object-fit:cover;
        }
        `}
    </style>
  );
};

export default HotspotStyle;
