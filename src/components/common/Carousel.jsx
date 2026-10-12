import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// react-slick is a CommonJS package; some bundlers give us the module
// namespace object instead of the component itself. Unwrap { default } if so.
const Slider = SliderModule?.default ?? SliderModule;

export default function Carousel({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
}
