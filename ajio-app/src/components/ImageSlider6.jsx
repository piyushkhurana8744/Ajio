import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-D-MHP-uhphim-p1-brands-4060.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-d-MHP-uhphim-p2-brands-upto60.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-d-mhp-uhphim-p3-brands-starting199.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-d-MHP-uhphim-p4-brands-flat55.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-d-MHP-uhphim-p5-brands-min40.jpg" },
];
function ImageSlider6() {
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
export default ImageSlider6;