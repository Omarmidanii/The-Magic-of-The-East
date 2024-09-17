import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
interface Props{
  images : string[];
}
const ImageSlider = ({images} : Props) => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box width="80%" margin="auto" mt={4}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
