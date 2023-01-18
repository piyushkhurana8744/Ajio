import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  { url: "https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-trendscarousel-upto70.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-trendscarousel-winterwear-edited.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-trendscarousel-azorte.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-trendscarousel-bestsellers.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-trendscarousel-womensethnic-edited.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-trendscarousel-womenswestern.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-trendscarousel-kidswear.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-trendscarousel-footwear-edited.jpg" },
];
function ImageSlider8() {
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
export default ImageSlider8;