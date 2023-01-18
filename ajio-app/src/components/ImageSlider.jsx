import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  { url: "https://assets.ajio.com/cms/AJIO/WEB/Top-D-Fashionation-5090-1440x470.gif" },
        { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-MainBanner-P3-WesternwearBrands-DenislingoMissChase-Min60ExtraUpto35.jpg" },
        { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-MainBanner-P4-Trends-Flat70.jpg" },
        { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-MainBanner-P6-Handbags-CapreseLinoPerros-Upto70.jpg" },
        { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-MainBanner-P7-Winterwear-LeeWrnagler-Min50.jpg" },
        { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-MainBanner-P2-WinterwearWardrobe-USPAFortCollins-Min50.jpg" }
];
function ImageSlider() {
  return (
    <div className="box">
      <Carousel showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL.url} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default ImageSlider;