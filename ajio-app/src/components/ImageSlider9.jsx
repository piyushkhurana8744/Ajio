import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { useMediaQuery } from '@chakra-ui/react'
const ImageSlider9 = () => {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
    const images = [
        { url: "https://assets.ajio.com/cms/AJIO/WEB/Top-D-Fashionation-5090-1440x470.gif" },
        { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-MainBanner-P3-WesternwearBrands-DenislingoMissChase-Min60ExtraUpto35.jpg" },
        { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-MainBanner-P4-Trends-Flat70.jpg" },
        { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-MainBanner-P6-Handbags-CapreseLinoPerros-Upto70.jpg" },
        { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-MainBanner-P7-Winterwear-LeeWrnagler-Min50.jpg" },
        { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-MainBanner-P2-WinterwearWardrobe-USPAFortCollins-Min50.jpg" },
      ];
      
    return (
    <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
      <SimpleImageSlider
        width={"100%"}
        height={"400px"}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={3.0}
        bgColor={"#b8db7f"}
      />
    </div>
  )
}

export default ImageSlider9
