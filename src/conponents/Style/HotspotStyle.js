const HotspotStyle = ({ attributes }) => {
  const { image, options, spotsone, tooltipone, cId } = attributes;
  return (
    <style>
      {`
      #bphb-hotspot-block-${cId} .hotspot-image-wrapper{
        box-sizing: border-box;
        position:relative;
        padding-left:${image.paddingDesktop.left};
        padding-right:${image.paddingDesktop.right};
        padding-top:${image.paddingDesktop.top};            
        padding-bottom:${image.paddingDesktop.bottom};
        border:${image.borderWidth.desktop} ${image.border} ${image.borderColor};
        border-radius:${image.borderRadius.desktop};
        box-shadow: ${image.boxShadow};
        width: ${image.width.desktop};
        height: ${image.height.desktop};
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }
      #bphb-hotspot-block-${cId} .hotspot-image{
        border-radius:inherit;
      }
      #bphb-hotspot-block-${cId} .hotspotone{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        animation: circle 2s infinite;
        position:relative;
        transition:all 0.2s ease-in-out;
      }
      #bphb-hotspot-block-${cId} .hotspotone.circle{
        height:${spotsone.height.desktop};
        width: ${spotsone.width.desktop};
        border-radius:${spotsone.borderRadius.desktop.top} ${spotsone.borderRadius.desktop.left} ${spotsone.borderRadius.desktop.bottom} ${spotsone.borderRadius.desktop.right};
        background-color: ${spotsone.bgColor};
        padding-left:${spotsone.padding.desktop.left};
        padding-right:${spotsone.padding.desktop.right};
        padding-top:${spotsone.padding.desktop.top};
        padding-bottom:${spotsone.padding.desktop.bottom};
        border:${spotsone.borderWidth.desktop} ${spotsone.borderType} ${spotsone.borderColor};
      transition:all 0.2s ease-in-out;
      }
      #bphb-hotspot-block-${cId} .hotspotone.circle>span{
        color:${spotsone.iconColor};
        font-size:${spotsone.iconSize.desktop};
      }
      #bphb-hotspot-block-${cId} .hotspotone>svg{
        color:${spotsone.iconColor};
        height:${spotsone.iconSize.desktop};
        width:${spotsone.iconSize.desktop};
      }
      #bphb-hotspot-block-${cId} .hotspotone>svg path{
        fill:${spotsone.iconColor};
      }
      #bphb-hotspot-block-${cId} .hotspotone.circle:hover{
        background-color: ${spotsone.hoverColor.bg};
        border-color: ${spotsone.hoverColor.border};
      }
      #bphb-hotspot-block-${cId} .hotspotone.circle:hover>span{
        color:${spotsone.hoverColor.icon};
      }
      #bphb-hotspot-block-${cId} .hotspotone:hover>svg{
        color:${spotsone.hoverColor.icon};
      }
      #bphb-hotspot-block-${cId} .hotspotone:hover>svg path{
        fill:${spotsone.hoverColor.icon};
      }
      #bphb-hotspot-block-${cId} .hotspotone.two{
        height:${spotsone.height.desktop};
        width: ${spotsone.width.desktop};
        border-radius:${spotsone.borderRadius.desktop.top} ${spotsone.borderRadius.desktop.left} ${spotsone.borderRadius.desktop.bottom} ${spotsone.borderRadius.desktop.right};
        background-color: ${spotsone.bgColor};
        padding-left:${spotsone.padding.desktop.left};
        padding-right:${spotsone.padding.desktop.right};
        padding-top:${spotsone.padding.desktop.top};
        padding-bottom:${spotsone.padding.desktop.bottom};
        border:${spotsone.borderWidth.desktop} ${spotsone.borderType} ${spotsone.borderColor};
      transition:all 0.2s ease-in-out;
      }
      #bphb-hotspot-block-${cId} .hotspotone.two>span{
        color:${spotsone.iconColor};
        font-size:${spotsone.iconSize.desktop};
      }
      #bphb-hotspot-block-${cId} .hotspotone.two:hover{
        background-color: ${spotsone.hoverColor.bg};
        border-color: ${spotsone.hoverColor.border};
      }
      #bphb-hotspot-block-${cId} .hotspotone.two:hover>span{
        color:${spotsone.hoverColor.icon};
      }

      #bphb-hotspot-block-${cId} .hotspotone.three{
        height:${spotsone.height.desktop};
        width: ${spotsone.width.desktop};
        border-radius:${spotsone.borderRadius.desktop.top} ${spotsone.borderRadius.desktop.left} ${spotsone.borderRadius.desktop.bottom} ${spotsone.borderRadius.desktop.right};
        background-color: ${spotsone.bgColor};
        padding-left:${spotsone.padding.desktop.left};
        padding-right:${spotsone.padding.desktop.right};
        padding-top:${spotsone.padding.desktop.top};
        padding-bottom:${spotsone.padding.desktop.bottom};
      transition:all 0.2s ease-in-out;
      }
      #bphb-hotspot-block-${cId} .hotspotone.three :where(span,img){
        height:100%;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        color:${spotsone.iconColor};
        font-size:${spotsone.iconSize.desktop};
        border:${spotsone.borderWidth.desktop} ${spotsone.borderType} ${spotsone.borderColor};
        border-radius: inherit;
      }
      #bphb-hotspot-block-${cId} .hotspotone.three:hover{
        background-color: ${spotsone.hoverColor.bg};
        border-color: ${spotsone.hoverColor.border};
      }
      #bphb-hotspot-block-${cId} .hotspotone.three:hover>span{
        color:${spotsone.hoverColor.icon};
      }

      #bphb-hotspot-block-${cId} .hotspotone.fourth{
        height:${spotsone.height.desktop};
        width: ${spotsone.width.desktop};
        border-radius:${spotsone.borderRadius.desktop.top} ${spotsone.borderRadius.desktop.left} ${spotsone.borderRadius.desktop.bottom} ${spotsone.borderRadius.desktop.right};
        background-color: ${spotsone.bgColor};
        padding-left:${spotsone.padding.desktop.left};
        padding-right:${spotsone.padding.desktop.right};
        padding-top:${spotsone.padding.desktop.top};
        padding-bottom:${spotsone.padding.desktop.bottom};
        border:${spotsone.borderWidth.desktop} ${spotsone.borderType} ${spotsone.borderColor};
      transition:all 0.2s ease-in-out;
      }
      #bphb-hotspot-block-${cId} .hotspotone.fourth>span{
        color:${spotsone.iconColor};
        font-size:${spotsone.iconSize.desktop};
      }
      #bphb-hotspot-block-${cId} .hotspotone.fourth:hover{
        background-color: ${spotsone.hoverColor.bg};
        border-color: ${spotsone.hoverColor.border};
      }
      #bphb-hotspot-block-${cId} .hotspotone.fourth:hover>span{
        color:${spotsone.hoverColor.icon};
      }

      #bphb-hotspot-block-${cId} .hotspotone.fifth{
        height:${spotsone.height.desktop};
        width: ${spotsone.width.desktop};
        border-radius:${spotsone.borderRadius.desktop.top} ${spotsone.borderRadius.desktop.left} ${spotsone.borderRadius.desktop.bottom} ${spotsone.borderRadius.desktop.right};
        background-color: ${spotsone.bgColor};
        padding-left:${spotsone.padding.desktop.left};
        padding-right:${spotsone.padding.desktop.right};
        padding-top:${spotsone.padding.desktop.top};
        padding-bottom:${spotsone.padding.desktop.bottom};
        border:${spotsone.borderWidth.desktop} ${spotsone.borderType} ${spotsone.borderColor};
      transition:all 0.2s ease-in-out;
      }
      #bphb-hotspot-block-${cId} .hotspotone.fifth>span{
        color:${spotsone.iconColor};
        font-size:${spotsone.iconSize.desktop};
      }
      #bphb-hotspot-block-${cId} .hotspotone.fifth:hover{
        background-color: ${spotsone.hoverColor.bg};
        border-color: ${spotsone.hoverColor.border};
      }
      #bphb-hotspot-block-${cId} .hotspotone.fifth:hover>span{
        color:${spotsone.hoverColor.icon};
      }

      #bphb-hotspot-block-${cId} .tooltip-reader{
        position: absolute;
        transition: all ease-in-out;
        transition-duration: ${options.speed}ms;
        transition-delay: ${options.delay}ms;
        cursor: pointer;
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.one{
        width:${tooltipone.width};
        background-color: ${tooltipone.bgColor};
        padding-left:${tooltipone.padding.desktop.left};
        padding-right:${tooltipone.padding.desktop.right};
        padding-top:${tooltipone.padding.desktop.top};
        padding-bottom:${tooltipone.padding.desktop.bottom};
        border-radius:${tooltipone.borderRadius.desktop.top} ${tooltipone.borderRadius.desktop.left} ${tooltipone.borderRadius.desktop.bottom} ${tooltipone.borderRadius.desktop.right};
        box-shadow:${tooltipone.boxShadow};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.one .bphb-tooltip-content :where(h1,h2,h3,h4,h5,h6,p,span,i,em,strong,a){
            color: ${tooltipone.textColor} !important;
            margin:0px;
        }

      #bphb-hotspot-block-${cId} .tooltip-reader.two{
        width:${tooltipone.width};
        background-color: ${tooltipone.bgColor};
        padding-left:${tooltipone.padding.desktop.left};
        padding-right:${tooltipone.padding.desktop.right};
        padding-top:${tooltipone.padding.desktop.top};
        padding-bottom:${tooltipone.padding.desktop.bottom};
        border-radius:${tooltipone.borderRadius.desktop.top} ${tooltipone.borderRadius.desktop.left} ${tooltipone.borderRadius.desktop.bottom} ${tooltipone.borderRadius.desktop.right};
        box-shadow:${tooltipone.boxShadow};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.two .bphb-tooltip-content :where(h1,h2,h3,h4,h5,h6,p,span,i,em,strong,a){
            color: ${tooltipone.textColor};
            margin:0px;
        }

      #bphb-hotspot-block-${cId} .tooltip-reader.three{
        width:${tooltipone.width};
        background-color: ${tooltipone.bgColor};
        padding-left:${tooltipone.padding.desktop.left};
        padding-right:${tooltipone.padding.desktop.right};
        padding-top:${tooltipone.padding.desktop.top};
        padding-bottom:${tooltipone.padding.desktop.bottom};
        border-radius:${tooltipone.borderRadius.desktop.top} ${tooltipone.borderRadius.desktop.left} ${tooltipone.borderRadius.desktop.bottom} ${tooltipone.borderRadius.desktop.right};
        box-shadow:${tooltipone.boxShadow};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.three .bphb-tooltip-content :where(h1,h2,h3,h4,h5,h6,p,span,i,em,strong,a){
            color: ${tooltipone.textColor};
            margin:0px;
        }

      #bphb-hotspot-block-${cId} .tooltip-reader.fourth{
        width:${tooltipone.width};
        background-color: ${tooltipone.bgColor};
        padding-left:${tooltipone.padding.desktop.left};
        padding-right:${tooltipone.padding.desktop.right};
        padding-top:${tooltipone.padding.desktop.top};
        padding-bottom:${tooltipone.padding.desktop.bottom};
        border-radius:${tooltipone.borderRadius.desktop.top} ${tooltipone.borderRadius.desktop.left} ${tooltipone.borderRadius.desktop.bottom} ${tooltipone.borderRadius.desktop.right};
        box-shadow:${tooltipone.boxShadow};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.fourth .bphb-tooltip-content :where(h1,h2,h3,h4,h5,h6,p,span,i,em,strong){
            color: ${tooltipone.textColor};
            margin:0px;
        }

      #bphb-hotspot-block-${cId} .tooltip-reader.fifth{
        width:${tooltipone.width};
        background-color: ${tooltipone.bgColor};
        padding-left:${tooltipone.padding.desktop.left};
        padding-right:${tooltipone.padding.desktop.right};
        padding-top:${tooltipone.padding.desktop.top};
        padding-bottom:${tooltipone.padding.desktop.bottom};
        border-radius:${tooltipone.borderRadius.desktop.top} ${tooltipone.borderRadius.desktop.left} ${tooltipone.borderRadius.desktop.bottom} ${tooltipone.borderRadius.desktop.right};
        box-shadow:${tooltipone.boxShadow};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.fifth .bphb-tooltip-content :where(h1,h2,h3,h4,h5,h6,p,span,i,em,strong,a){
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
        #bphb-hotspot-block-${cId} .hotspot-image-wrapper>.hotspot-image{
          width: ${image.width.desktop};
          height: ${image.height.desktop};
          object-fit:cover;
        }


      @media screen and (min-width: 1024px) {
        #bphb-hotspot-block-${cId} .hotspot-image-wrapper{
          padding-left:${image.paddingDesktop.left};
          padding-right:${image.paddingDesktop.right};
          padding-top:${image.paddingDesktop.top};            
          padding-bottom:${image.paddingDesktop.bottom};
          border:${image.borderWidth.desktop} ${image.border} ${image.borderColor};
          border-radius:${image.borderRadius.desktop};
          }
      #bphb-hotspot-block-${cId} .hotspotone.circle{
        height:${spotsone.height.desktop};
        width: ${spotsone.width.desktop};
        border-radius:${spotsone.borderRadius.desktop.top} ${spotsone.borderRadius.desktop.left} ${spotsone.borderRadius.desktop.bottom} ${spotsone.borderRadius.desktop.right};
        padding-left:${spotsone.padding.desktop.left};
        padding-right:${spotsone.padding.desktop.right};
        padding-top:${spotsone.padding.desktop.top};
        padding-bottom:${spotsone.padding.desktop.bottom};
        border:${spotsone.borderWidth.desktop} ${spotsone.borderType} ${spotsone.borderColor};
      }

      #bphb-hotspot-block-${cId} .hotspotone.circle>span{
        font-size:${spotsone.iconSize.desktop};
      }
      #bphb-hotspot-block-${cId} .hotspotone.two{
        height:${spotsone.height.desktop};
        width: ${spotsone.width.desktop};
        border-radius:${spotsone.borderRadius.desktop.top} ${spotsone.borderRadius.desktop.left} ${spotsone.borderRadius.desktop.bottom} ${spotsone.borderRadius.desktop.right};
        padding-left:${spotsone.padding.desktop.left};
        padding-right:${spotsone.padding.desktop.right};
        padding-top:${spotsone.padding.desktop.top};
        padding-bottom:${spotsone.padding.desktop.bottom};
        border:${spotsone.borderWidth.desktop} ${spotsone.borderType} ${spotsone.borderColor};
      }
      #bphb-hotspot-block-${cId} .hotspotone.two>span{
        font-size:${spotsone.iconSize.desktop};
      }
      #bphb-hotspot-block-${cId} .hotspotone.three{
        height:${spotsone.height.desktop};
        width: ${spotsone.width.desktop};
        border-radius:${spotsone.borderRadius.desktop.top} ${spotsone.borderRadius.desktop.left} ${spotsone.borderRadius.desktop.bottom} ${spotsone.borderRadius.desktop.right};
        padding-left:${spotsone.padding.desktop.left};
        padding-right:${spotsone.padding.desktop.right};
        padding-top:${spotsone.padding.desktop.top};
        padding-bottom:${spotsone.padding.desktop.bottom};
      }
      #bphb-hotspot-block-${cId} .hotspotone.three :where(span,img){
        font-size:${spotsone.iconSize.desktop};
        border:${spotsone.borderWidth.desktop} ${spotsone.borderType} ${spotsone.borderColor};
      }
      #bphb-hotspot-block-${cId} .hotspotone.fourth{
        height:${spotsone.height.desktop};
        width: ${spotsone.width.desktop};
        border-radius:${spotsone.borderRadius.desktop.top} ${spotsone.borderRadius.desktop.left} ${spotsone.borderRadius.desktop.bottom} ${spotsone.borderRadius.desktop.right};
        padding-left:${spotsone.padding.desktop.left};
        padding-right:${spotsone.padding.desktop.right};
        padding-top:${spotsone.padding.desktop.top};
        padding-bottom:${spotsone.padding.desktop.bottom};
        border:${spotsone.borderWidth.desktop} ${spotsone.borderType} ${spotsone.borderColor};
      }
      #bphb-hotspot-block-${cId} .hotspotone.fourth>span{
        font-size:${spotsone.iconSize.desktop};
      }
      #bphb-hotspot-block-${cId} .hotspotone.fifth{
        height:${spotsone.height.desktop};
        width: ${spotsone.width.desktop};
        border-radius:${spotsone.borderRadius.desktop.top} ${spotsone.borderRadius.desktop.left} ${spotsone.borderRadius.desktop.bottom} ${spotsone.borderRadius.desktop.right};
        padding-left:${spotsone.padding.desktop.left};
        padding-right:${spotsone.padding.desktop.right};
        padding-top:${spotsone.padding.desktop.top};
        padding-bottom:${spotsone.padding.desktop.bottom};
        border:${spotsone.borderWidth.desktop} ${spotsone.borderType} ${spotsone.borderColor};
      }
      #bphb-hotspot-block-${cId} .hotspotone.fifth>span{
        font-size:${spotsone.iconSize.desktop};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.one{
        padding-left:${tooltipone.padding.desktop.left};
        padding-right:${tooltipone.padding.desktop.right};
        padding-top:${tooltipone.padding.desktop.top};
        padding-bottom:${tooltipone.padding.desktop.bottom};
        border-radius:${tooltipone.borderRadius.desktop.top} ${tooltipone.borderRadius.desktop.left} ${tooltipone.borderRadius.desktop.bottom} ${tooltipone.borderRadius.desktop.right};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.two{
        padding-left:${tooltipone.padding.desktop.left};
        padding-right:${tooltipone.padding.desktop.right};
        padding-top:${tooltipone.padding.desktop.top};
        padding-bottom:${tooltipone.padding.desktop.bottom};
        border-radius:${tooltipone.borderRadius.desktop.top} ${tooltipone.borderRadius.desktop.left} ${tooltipone.borderRadius.desktop.bottom} ${tooltipone.borderRadius.desktop.right};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.three{
        padding-left:${tooltipone.padding.desktop.left};
        padding-right:${tooltipone.padding.desktop.right};
        padding-top:${tooltipone.padding.desktop.top};
        padding-bottom:${tooltipone.padding.desktop.bottom};
        border-radius:${tooltipone.borderRadius.desktop.top} ${tooltipone.borderRadius.desktop.left} ${tooltipone.borderRadius.desktop.bottom} ${tooltipone.borderRadius.desktop.right};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.fourth{
        padding-left:${tooltipone.padding.desktop.left};
        padding-right:${tooltipone.padding.desktop.right};
        padding-top:${tooltipone.padding.desktop.top};
        padding-bottom:${tooltipone.padding.desktop.bottom};
        border-radius:${tooltipone.borderRadius.desktop.top} ${tooltipone.borderRadius.desktop.left} ${tooltipone.borderRadius.desktop.bottom} ${tooltipone.borderRadius.desktop.right};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.fifth{
        padding-left:${tooltipone.padding.desktop.left};
        padding-right:${tooltipone.padding.desktop.right};
        padding-top:${tooltipone.padding.desktop.top};
        padding-bottom:${tooltipone.padding.desktop.bottom};
        border-radius:${tooltipone.borderRadius.desktop.top} ${tooltipone.borderRadius.desktop.left} ${tooltipone.borderRadius.desktop.bottom} ${tooltipone.borderRadius.desktop.right};
      }
        }

      @media (min-width: 768px) and (max-width: 1023px) {
        #bphb-hotspot-block-${cId} .hotspot-image-wrapper{
          padding-left:${image.paddingTablet.left};
          padding-right:${image.paddingTablet.right};
          padding-top:${image.paddingTablet.top};            
          padding-bottom:${image.paddingTablet.bottom};
          border:${image.borderWidth.desktop} ${image.border} ${image.borderColor};
          border-radius:${image.borderRadius.tablet};
          }
      #bphb-hotspot-block-${cId} .hotspotone.circle{
        height:${spotsone.height.tablet};
        width: ${spotsone.width.tablet};
        border-radius:${spotsone.borderRadius.tablet.top} ${spotsone.borderRadius.tablet.left} ${spotsone.borderRadius.tablet.bottom} ${spotsone.borderRadius.tablet.right};
        padding-left:${spotsone.padding.tablet.left};
        padding-right:${spotsone.padding.tablet.right};
        padding-top:${spotsone.padding.tablet.top};
        padding-bottom:${spotsone.padding.tablet.bottom};
        border:${spotsone.borderWidth.tablet} ${spotsone.borderType} ${spotsone.borderColor};
      }
      #bphb-hotspot-block-${cId} .hotspotone.circle>span{
        font-size:${spotsone.iconSize.tablet};
      }
      #bphb-hotspot-block-${cId} .hotspotone.two{
        height:${spotsone.height.tablet};
        width: ${spotsone.width.tablet};
        border-radius:${spotsone.borderRadius.tablet.top} ${spotsone.borderRadius.tablet.left} ${spotsone.borderRadius.tablet.bottom} ${spotsone.borderRadius.tablet.right};
        padding-left:${spotsone.padding.tablet.left};
        padding-right:${spotsone.padding.tablet.right};
        padding-top:${spotsone.padding.tablet.top};
        padding-bottom:${spotsone.padding.tablet.bottom};
        border:${spotsone.borderWidth.tablet} ${spotsone.borderType} ${spotsone.borderColor};
      }
      #bphb-hotspot-block-${cId} .hotspotone.two>span{
        font-size:${spotsone.iconSize.tablet};
      }
      #bphb-hotspot-block-${cId} .hotspotone.three{
        height:${spotsone.height.tablet};
        width: ${spotsone.width.tablet};
        border-radius:${spotsone.borderRadius.tablet.top} ${spotsone.borderRadius.tablet.left} ${spotsone.borderRadius.tablet.bottom} ${spotsone.borderRadius.tablet.right};
        padding-left:${spotsone.padding.tablet.left};
        padding-right:${spotsone.padding.tablet.right};
        padding-top:${spotsone.padding.tablet.top};
        padding-bottom:${spotsone.padding.tablet.bottom};
      }
      #bphb-hotspot-block-${cId} .hotspotone.three :where(span,img){
        font-size:${spotsone.iconSize.tablet};
        border:${spotsone.borderWidth.tablet} ${spotsone.borderType} ${spotsone.borderColor};
      }
      #bphb-hotspot-block-${cId} .hotspotone.fourth{
        height:${spotsone.height.tablet};
        width: ${spotsone.width.tablet};
        border-radius:${spotsone.borderRadius.tablet.top} ${spotsone.borderRadius.tablet.left} ${spotsone.borderRadius.tablet.bottom} ${spotsone.borderRadius.tablet.right};
        padding-left:${spotsone.padding.tablet.left};
        padding-right:${spotsone.padding.tablet.right};
        padding-top:${spotsone.padding.tablet.top};
        padding-bottom:${spotsone.padding.tablet.bottom};
        border:${spotsone.borderWidth.tablet} ${spotsone.borderType} ${spotsone.borderColor};
      }
      #bphb-hotspot-block-${cId} .hotspotone.fourth>span{
        font-size:${spotsone.iconSize.tablet};
      }
      #bphb-hotspot-block-${cId} .hotspotone.fifth{
        height:${spotsone.height.tablet};
        width: ${spotsone.width.tablet};
        border-radius:${spotsone.borderRadius.tablet.top} ${spotsone.borderRadius.tablet.left} ${spotsone.borderRadius.tablet.bottom} ${spotsone.borderRadius.tablet.right};
        padding-left:${spotsone.padding.tablet.left};
        padding-right:${spotsone.padding.tablet.right};
        padding-top:${spotsone.padding.tablet.top};
        padding-bottom:${spotsone.padding.tablet.bottom};
        border:${spotsone.borderWidth.tablet} ${spotsone.borderType} ${spotsone.borderColor};
      }
      #bphb-hotspot-block-${cId} .hotspotone.fifth>span{
        font-size:${spotsone.iconSize.tablet};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.one{
        word-wrap: break-word;
        padding-left:${tooltipone.padding.tablet.left};
        padding-right:${tooltipone.padding.tablet.right};
        padding-top:${tooltipone.padding.tablet.top};
        padding-bottom:${tooltipone.padding.tablet.bottom};
        border-radius:${tooltipone.borderRadius.tablet.top} ${tooltipone.borderRadius.tablet.left} ${tooltipone.borderRadius.tablet.bottom} ${tooltipone.borderRadius.tablet.right};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.two{
        word-wrap: break-word;
        padding-left:${tooltipone.padding.tablet.left};
        padding-right:${tooltipone.padding.tablet.right};
        padding-top:${tooltipone.padding.tablet.top};
        padding-bottom:${tooltipone.padding.tablet.bottom};
        border-radius:${tooltipone.borderRadius.tablet.top} ${tooltipone.borderRadius.tablet.left} ${tooltipone.borderRadius.tablet.bottom} ${tooltipone.borderRadius.tablet.right};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.three{
        word-wrap: break-word;
        padding-left:${tooltipone.padding.tablet.left};
        padding-right:${tooltipone.padding.tablet.right};
        padding-top:${tooltipone.padding.tablet.top};
        padding-bottom:${tooltipone.padding.tablet.bottom};
        border-radius:${tooltipone.borderRadius.tablet.top} ${tooltipone.borderRadius.tablet.left} ${tooltipone.borderRadius.tablet.bottom} ${tooltipone.borderRadius.tablet.right};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.fourth{
        word-wrap: break-word;
        padding-left:${tooltipone.padding.tablet.left};
        padding-right:${tooltipone.padding.tablet.right};
        padding-top:${tooltipone.padding.tablet.top};
        padding-bottom:${tooltipone.padding.tablet.bottom};
        border-radius:${tooltipone.borderRadius.tablet.top} ${tooltipone.borderRadius.tablet.left} ${tooltipone.borderRadius.tablet.bottom} ${tooltipone.borderRadius.tablet.right};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.fifth{
        word-wrap: break-word;
        padding-left:${tooltipone.padding.tablet.left};
        padding-right:${tooltipone.padding.tablet.right};
        padding-top:${tooltipone.padding.tablet.top};
        padding-bottom:${tooltipone.padding.tablet.bottom};
        border-radius:${tooltipone.borderRadius.tablet.top} ${tooltipone.borderRadius.tablet.left} ${tooltipone.borderRadius.tablet.bottom} ${tooltipone.borderRadius.tablet.right};
      }
        }

      @media screen and (max-width: 767px) {
        #bphb-hotspot-block-${cId} .hotspot-image-wrapper{
          padding-left:${image.paddingMobile.left};
          padding-right:${image.paddingMobile.right};
          padding-top:${image.paddingMobile.top};            
          padding-bottom:${image.paddingMobile.bottom};
          border:${image.borderWidth.desktop} ${image.border} ${image.borderColor};
          border-radius:${image.borderRadius.mobile};
          }
      #bphb-hotspot-block-${cId} .hotspotone.circle{
        height:${spotsone.height.mobile};
        width: ${spotsone.width.mobile};
        border-radius:${spotsone.borderRadius.mobile.top} ${spotsone.borderRadius.mobile.left} ${spotsone.borderRadius.mobile.bottom} ${spotsone.borderRadius.mobile.right};
        padding-left:${spotsone.padding.mobile.left};
        padding-right:${spotsone.padding.mobile.right};
        padding-top:${spotsone.padding.mobile.top};
        padding-bottom:${spotsone.padding.mobile.bottom};
        border:${spotsone.borderWidth.mobile} ${spotsone.borderType} ${spotsone.borderColor};
      }
      #bphb-hotspot-block-${cId} .hotspotone.circle>span{
        font-size:${spotsone.iconSize.mobile};
      }
      #bphb-hotspot-block-${cId} .hotspotone.two{
        height:${spotsone.height.mobile};
        width: ${spotsone.width.mobile};
        border-radius:${spotsone.borderRadius.mobile.top} ${spotsone.borderRadius.mobile.left} ${spotsone.borderRadius.mobile.bottom} ${spotsone.borderRadius.mobile.right};
        padding-left:${spotsone.padding.mobile.left};
        padding-right:${spotsone.padding.mobile.right};
        padding-top:${spotsone.padding.mobile.top};
        padding-bottom:${spotsone.padding.mobile.bottom};
        border:${spotsone.borderWidth.mobile} ${spotsone.borderType} ${spotsone.borderColor};
      }
      #bphb-hotspot-block-${cId} .hotspotone.two>span{
        font-size:${spotsone.iconSize.mobile};
      }
      #bphb-hotspot-block-${cId} .hotspotone.three{
        height:${spotsone.height.mobile};
        width: ${spotsone.width.mobile};
        border-radius:${spotsone.borderRadius.mobile.top} ${spotsone.borderRadius.mobile.left} ${spotsone.borderRadius.mobile.bottom} ${spotsone.borderRadius.mobile.right};
        padding-left:${spotsone.padding.mobile.left};
        padding-right:${spotsone.padding.mobile.right};
        padding-top:${spotsone.padding.mobile.top};
        padding-bottom:${spotsone.padding.mobile.bottom};
      }
      #bphb-hotspot-block-${cId} .hotspotone.three :where(span,img){
        font-size:${spotsone.iconSize.mobile};
        border:${spotsone.borderWidth.mobile} ${spotsone.borderType} ${spotsone.borderColor};
      }
      #bphb-hotspot-block-${cId} .hotspotone.fourth{
        height:${spotsone.height.mobile};
        width: ${spotsone.width.mobile};
        border-radius:${spotsone.borderRadius.mobile.top} ${spotsone.borderRadius.mobile.left} ${spotsone.borderRadius.mobile.bottom} ${spotsone.borderRadius.mobile.right};
        padding-left:${spotsone.padding.mobile.left};
        padding-right:${spotsone.padding.mobile.right};
        padding-top:${spotsone.padding.mobile.top};
        padding-bottom:${spotsone.padding.mobile.bottom};
        border:${spotsone.borderWidth.mobile} ${spotsone.borderType} ${spotsone.borderColor};
      }
      #bphb-hotspot-block-${cId} .hotspotone.fourth>span{
        font-size:${spotsone.iconSize.mobile};
      }
      #bphb-hotspot-block-${cId} .hotspotone.fifth{
        height:${spotsone.height.mobile};
        width: ${spotsone.width.mobile};
        border-radius:${spotsone.borderRadius.mobile.top} ${spotsone.borderRadius.mobile.left} ${spotsone.borderRadius.mobile.bottom} ${spotsone.borderRadius.mobile.right};
        padding-left:${spotsone.padding.mobile.left};
        padding-right:${spotsone.padding.mobile.right};
        padding-top:${spotsone.padding.mobile.top};
        padding-bottom:${spotsone.padding.mobile.bottom};
        border:${spotsone.borderWidth.mobile} ${spotsone.borderType} ${spotsone.borderColor};
      }
      #bphb-hotspot-block-${cId} .hotspotone.fifth>span{
        font-size:${spotsone.iconSize.mobile};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.one{
        word-wrap: break-word;
        padding-left:${tooltipone.padding.mobile.left};
        padding-right:${tooltipone.padding.mobile.right};
        padding-top:${tooltipone.padding.mobile.top};
        padding-bottom:${tooltipone.padding.mobile.bottom};
        border-radius:${tooltipone.borderRadius.mobile.top} ${tooltipone.borderRadius.mobile.left} ${tooltipone.borderRadius.mobile.bottom} ${tooltipone.borderRadius.mobile.right};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.two{
        word-wrap: break-word;
        padding-left:${tooltipone.padding.mobile.left};
        padding-right:${tooltipone.padding.mobile.right};
        padding-top:${tooltipone.padding.mobile.top};
        padding-bottom:${tooltipone.padding.mobile.bottom};
        border-radius:${tooltipone.borderRadius.mobile.top} ${tooltipone.borderRadius.mobile.left} ${tooltipone.borderRadius.mobile.bottom} ${tooltipone.borderRadius.mobile.right};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.three{
        word-wrap: break-word;
        padding-left:${tooltipone.padding.mobile.left};
        padding-right:${tooltipone.padding.mobile.right};
        padding-top:${tooltipone.padding.mobile.top};
        padding-bottom:${tooltipone.padding.mobile.bottom};
        border-radius:${tooltipone.borderRadius.mobile.top} ${tooltipone.borderRadius.mobile.left} ${tooltipone.borderRadius.mobile.bottom} ${tooltipone.borderRadius.mobile.right};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.fourth{
        word-wrap: break-word;
        padding-left:${tooltipone.padding.mobile.left};
        padding-right:${tooltipone.padding.mobile.right};
        padding-top:${tooltipone.padding.mobile.top};
        padding-bottom:${tooltipone.padding.mobile.bottom};
        border-radius:${tooltipone.borderRadius.mobile.top} ${tooltipone.borderRadius.mobile.left} ${tooltipone.borderRadius.mobile.bottom} ${tooltipone.borderRadius.mobile.right};
      }
      #bphb-hotspot-block-${cId} .tooltip-reader.fifth{
        word-wrap: break-word;
        padding-left:${tooltipone.padding.mobile.left};
        padding-right:${tooltipone.padding.mobile.right};
        padding-top:${tooltipone.padding.mobile.top};
        padding-bottom:${tooltipone.padding.mobile.bottom};
        border-radius:${tooltipone.borderRadius.mobile.top} ${tooltipone.borderRadius.mobile.left} ${tooltipone.borderRadius.mobile.bottom} ${tooltipone.borderRadius.mobile.right};
      }

        }

        `}
    </style>
  );
};

export default HotspotStyle;
