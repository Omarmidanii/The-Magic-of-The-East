import { Box, Icon, Stack } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ArrowsStyle.css";
import ItemCard from "./ItemCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  items: { name: string; images: string[] }[];
}


const GategorySlider = ({ items }: Props) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: items?.length ? Math.min(5, items?.length || 0) : 5,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: <Icon  as={MdKeyboardArrowLeft} color={'white'}/> ,
    prevArrow: <Icon  as={MdKeyboardArrowRight} color={'white'}/>,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: items?.length ? Math.min(4, items?.length || 0) : 4,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: items?.length ? Math.min(3, items?.length || 0) : 3,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: items?.length ? Math.min(2, items?.length || 0) : 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Stack
      style={{ height: 280 }}
      marginTop={8}
      marginX={20}
      justifyContent={"center"}
    >
      <Slider {...settings}>
        {items?.map((image, index) => (
          <Box key={index} padding={5}>
            <ItemCard images={image.images}>{image.name}</ItemCard>
          </Box>
        ))}
      </Slider>
    </Stack>
  );
};

export default GategorySlider;
