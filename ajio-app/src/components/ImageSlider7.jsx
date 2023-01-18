import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-UHPwomen-p1-uniqchoice-homezsparrow-starting399.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-UHPwomen-p1-nike-fila-40to50.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-UHPwomen-p3-satyapaul-scotch&soda-30to50.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-UHPwomen-p4-dnmx-trendyol-starting699.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-UHPwomen-p5-zivame-clovia-starting199.jpg" },
];
function ImageSlider7() {
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
export default ImageSlider7;