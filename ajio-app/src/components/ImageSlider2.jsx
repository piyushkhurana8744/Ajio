import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-26Hrs-D-P1-Ketch-Flat65.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-26Hrs-D-P1-Ketch-Flat65.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-TopBanner-P4-ONLYVeroModa-Min60.jpg" },
];
function ImageSlider2() {
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
export default ImageSlider2;