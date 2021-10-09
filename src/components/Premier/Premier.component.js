import React from "react";
import Slider from "react-slick";

import settings from "../config/Postersettings.config";

import Poster from "../Poster/Poster.Movies";

import PosterPics from "../config/PosterImages.config";


const Premier = () =>
{
    return (
        <>
        <div class="p-3 pt-0">
            <h1 class="text-white font-bold text-2xl">
                Premieres
            </h1>
            
            <h3 class="text-white ">
                Brand new releases every Friday
            </h3>
        </div>

        <Slider {...settings}>
        {PosterPics.map((image)=>(
            <Poster {...image} isDark/>
        ))}
        </Slider>
        </>
    );
};

export default Premier;