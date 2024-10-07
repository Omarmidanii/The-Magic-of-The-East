import { Box, HStack, Stack } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import resizeWindow from "../../services/resizeWindow";

interface Props {
  images: string[];
}

const ItemsImagesSlider = ({ images }: Props) => {
  const { width } = resizeWindow();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width < 990 ? 1 : 2,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <Stack m={2} alignContent={"center"}>
      {images.length > 1 ? (
        <Slider {...settings}>
          {images?.map((image, index) => (
            <div key={index}>
              <Box
                borderRadius={20}
                ml={
                  width > 990
                    ? 0
                    : width > 767
                    ? 20
                    : width > 470
                    ? 10
                    : width / 20
                }
                boxSize={280}
                bgRepeat={"no-repeat"}
                bgPosition={"center"}
                bgSize={"cover"}
                bgImg={image}
              ></Box>
            </div>
          ))}
        </Slider>
      ) : (
        <HStack
          mr={
            width > 990 ? 40 : width > 767 ? 20 : width > 470 ? 12 : width / 20
          }
          borderRadius={20}
          boxSize={280}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          bgSize={"cover"}
          bgImg={images[0]}
        ></HStack>
      )}
    </Stack>
  );
};

export default ItemsImagesSlider;
