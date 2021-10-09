import {BsChevronLeft,BsChevronRight} from "react-icons/bs";
const settings ={
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    InitialSlide: 0,
    nextArrow:  <div><BsChevronRight class=" rounded-full bg-gray-700 absolute -top-6 -right-6 fill-current text-white w-12 h-12"/></div>,
    prevArrow: <div><BsChevronLeft class=" rounded-full  bg-gray-700 absolute -top-6 -left-5 fill-current text-white w-12 h-12"/></div>,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
          }
        },
      ]
}

export default settings;