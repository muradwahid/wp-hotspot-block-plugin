import {getMultiShadowCSS} from '../../../../Components/utils/getCSS'
const HotspotStyle = ({ attributes }) => {
  const {
    image,
    options,
    spotsone,
    spotstwo,
    spotsthree,
    spotsfourth,
    spotsfifth,
    tooltipone,
    tooltiptwo,
    tooltipthree,
    tooltipfourth,
    tooltipfifth,
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
      transition:all 0.3s ease-in-out;
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
      .hotspotone.two{
        height:${spotstwo.height.desktop};
        width: ${spotstwo.width.desktop};
        border-radius: 50% 50% 5px 50%;
        background-color: ${spotstwo.bgColor};
      }
      .hotspotone.three{
        height:${spotsthree.height.desktop};
        width: ${spotsthree.width.desktop};
        padding:5px;
        border-radius: 50% 50% 50% 50%;
        background-color: ${spotsthree.bgColor};
      }
      .hotspotone.three>span{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid;
        border-radius: 100%;
      }
      .hotspotone.fourth{
        height:${spotsfourth.height.desktop};
        width: ${spotsfourth.width.desktop};
        padding:5px;
        border-radius: 50% 50% 50% 50%;
        border:2px solid ${spotsfourth.borderColor.desktop};
        background-color: ${spotsfourth.bgColor.desktop};
      }
      .hotspotone.fourth>span{
        color:${spotsfourth.iconColor};
        font-size:${spotsfourth.iconSize};
      }
      .hotspotone.fifth{
        height:${spotsfifth.height.desktop};
        width: ${spotsfifth.width.desktop};
        border-radius: 50px;
        border: none;
        background-color: ${spotsfifth.bgColor};
      }
      .hotspotone.fifth>span{
        color:${spotsfifth.iconColor};
        font-size:${spotsfifth.iconSize};
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
      .tooltip-reader.two{
        width:${tooltiptwo.width};
        background-color: ${tooltiptwo.bgColor};
        padding: 0px ${tooltiptwo.padding};
        border:${tooltiptwo.borderWidth} solid ${tooltiptwo.borderColor};
        border-radius:${tooltiptwo.borderRadius};
        box-shadow:${tooltiptwo.boxShadow};
        
      }
      .tooltip-reader.two .bphb-tooltip-content :where(h1,h2,h3,h4,h5,h6,p,span,i,em,strong){
            color: ${tooltiptwo.textColor};
            margin:0px;
          }
      .tooltip-reader.three{
        width:${tooltipthree.width};
        background-color: ${tooltipthree.bgColor};
        padding: 0px ${tooltipthree.padding};
        border:${tooltipthree.borderWidth} solid ${tooltipthree.borderColor};
        border-radius:${tooltipthree.borderRadius};
        box-shadow:${tooltipthree.boxShadow};
        
      }
      .tooltip-reader.three .bphb-tooltip-content :where(h1,h2,h3,h4,h5,h6,p,span,i,em,strong){
            color: ${tooltipthree.textColor};
            margin:0px;
      }
      .tooltip-reader.fourth{
        width:${tooltipfourth.width};
        background-color: ${tooltipfourth.bgColor};
        padding: 0px ${tooltipfourth.padding};
        border:${tooltipfourth.borderWidth} solid ${tooltipfourth.borderColor};
        border-radius:${tooltipfourth.borderRadius};
        box-shadow:${tooltipfourth.boxShadow};
        
      }
      .tooltip-reader.fourth .bphb-tooltip-content :where(h1,h2,h3,h4,h5,h6,p,span,i,em,strong){
            color: ${tooltipfourth.textColor};
            margin:0px;
      }
      .tooltip-reader.fifth{
        width:${tooltipfifth.width};
        background-color: ${tooltipfifth.bgColor};
        padding: 0px ${tooltipfifth.padding};
        border:${tooltipfifth.borderWidth} solid ${tooltipfifth.borderColor};
        border-radius:${tooltipfifth.borderRadius};
        box-shadow:${tooltipfifth.boxShadow};
        
      }
      .tooltip-reader.fifth .bphb-tooltip-content :where(h1,h2,h3,h4,h5,h6,p,span,i,em,strong){
            color: ${tooltipfifth.textColor};
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
