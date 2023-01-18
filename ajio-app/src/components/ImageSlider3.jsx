import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-TopBanner-P1-Casuals-PerfktUIshin-Min60Extraupto30.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-TopBanner-P2-DealsLikeNeverBefore-USPAFortCollins-6080.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-TopBanner-P3-PremiumWardrobeClassics-MnSScotchSoda-Upto60.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-TopBanner-P4-ONLYVeroModa-Min60.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-TopBanner-P5-NetplayAvaasa-Upto70.jpg" },
];
function ImageSlider3() {
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
export default ImageSlider3;