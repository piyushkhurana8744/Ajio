import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-JIT-P1-BestOfEthnic-KimayraKVSFab-Starting499Extraupto35.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-JIT-P2-HomegrownBestsellers-IVOCTheBearHouse-Upto80.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-JIT-P3-TopBrands-janasyaLovista-Min60.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-JIT-P4-Lifestyle-Upto60.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-JIT-P5-Winterwear-BelleFille98North-Flat50.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/117012023-UHP-D-JIT-P7-BrandsOfTheDay-GiltoGespo-Min40NEW.jpg" },
];
function ImageSlider5() {
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
export default ImageSlider5;