import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  { url: "https://assets.ajio.com/cms/AJIO/WEB/1440x128--FB.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/Paytm-1440x128pppp.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/HSBC-1440x128.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-offers-payupto3AJIOpoints.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-offers-payupto3AJIOpoints.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-offers-relianceone.jpg" },
];
function ImageSlider1() {
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
export default ImageSlider1;