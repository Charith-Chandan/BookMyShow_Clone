import React, {useState, useEffect} from 'react';
import HeroSlider from "react-slick";
import axios from 'axios';

import {BsChevronLeft,BsChevronRight} from "react-icons/bs";
//import {NextArrow, PrevArrow} from "./Arrows.component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () =>
{
    const settings = 
    {
        arrows: true,
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <div class="relative"><BsChevronRight class="bg-gray-800 rounded-l-lg text-white w-11 h-11 float-right"/></div>,
        prevArrow: <div class="relative"><BsChevronLeft class=" absolute inset-5 bg-gray-800 rounded-r-lg text-white w-11 h-11"/></div>
      };

    const settingsLg =
    {
        dots: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "70px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        nextArrow:  <div><BsChevronRight class="bg-gray-700 absolute bottom-0 rounded-l-lg fill-current text-white w-11 h-11"/></div>,
        prevArrow: <div><BsChevronLeft class="bg-gray-700 absolute bottom-0 rounded-r-lg fill-current text-white w-11 h-11"/></div>,
    }

    const [images,setImages] = useState([]);

    useEffect(() => {
        const requ = async() => {
          const getImages = await axios.get("/movie/now_playing");
          setImages(getImages.data.results);
        };
        requ();
      }, []);

    // const images =
    // [
    //     "https://in.bmscdn.com/promotions/cms/creatives/1630432985528_incinemasthisfriday_shangchiandthelegendofthetenrings_webshowcase_1240x300.jpg",
    //     "https://in.bmscdn.com/promotions/cms/creatives/1631730452596_lovestory_moviepromotion_webshowcase_1240x300.jpg",
    //     "https://in.bmscdn.com/promotions/cms/creatives/1629879193867_pawandeeprajan_webshowcase_1240x300.jpg",
    //     "https://in.bmscdn.com/promotions/cms/creatives/1629830049996_celebfiecruisewiththestarsrevised_webshowcase_1240x300_24aug.jpg",
    //     "https://in.bmscdn.com/promotions/cms/creatives/1630177100306_completecollectionofbacktothefuture_1240x300.jpg",
    //     "https://in.bmscdn.com/promotions/cms/creatives/1631817814419_moviesdontbreathe2_english_webshowcase_1240x300.jpg"
    // ]  


    return(
        <>
        <div class=" bg-white lg:hidden">
        <div class="bg-navCol-50 mt-2 rounded">
                            <ul class="flex">
                                <li class="cursor-pointer"><img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/movies-v3-collection-202101080832.png" alt="Movies"/></li>
                                <li class="cursor-pointer"><img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/stream-v3-new-tag-collection-202102040316.png" alt="Movies"/></li>
                                <li class="cursor-pointer"><img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/events-v3-collection-202101080832.png" alt="Movies"/></li>
                                <li class="cursor-pointer"><img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/sports-v3-collection-202101080832.png" alt="Movies"/></li>
                                <li class="cursor-pointer"><img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/plays-v3-collection-202101080832.png" alt="Movies"/></li>
                                <li class="cursor-pointer"><img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/activities-v3-collection-202101080832.png" alt="Movies"/></li>
                            </ul>
                        </div>          
            <HeroSlider {...settings}>
            {   
                images.map((image)=>
                (
                    <div>
                        <div class="px-1 py-2 h-44 w-full rounded bg-white">
                            {/* <img class=" cursor-pointer rounded w-full h-44" src={image} alt="images"/> */}
                            <img class="rounded w-full h-full cursor-pointer" src={`https://images.tmdb.org/t/p/original${image.backdrop_path}`} alt="images"/>
                        </div>
                    </div>
                )
                )
            }
            </HeroSlider>
        </div>

        <div class="hidden lg:block">
        <HeroSlider {...settingsLg}>
        {
            
            images.map((image)=>
            (
                <div class="px-1 py-2 w-full h-96 rounded bg-white">
                    {/* <img class="rounded w-full h-full cursor-pointer" src={image} alt="images"/> */}
                    <img class="rounded w-full h-full cursor-pointer" src={`https://images.tmdb.org/t/p/original${image.backdrop_path}`} alt="images"/>
                </div>
            )
            )
        }
        </HeroSlider>
        </div>

        </>
    );
}

export default HeroCarousal;