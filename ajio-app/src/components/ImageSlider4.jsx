import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-DailyBanner-P1-Bedsheets-HomeSparrowUniqChoice-Starting399.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-DailyBanner-P2-Sportswear-SkechersFila-Min50.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-DailyBanner-P3-EssentialsForHim-DNMXNetplay-Starting199.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-DailyBanner-P4-MnS-Upto40Extra35.jpg" },
  { url: "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-DailyBanner-P5-InnerwearLoungewear-ZivameClovia-Upto75.jpg" },
];
function ImageSlider4() {
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
export default ImageSlider4;