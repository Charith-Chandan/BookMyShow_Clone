import React, {useState, useEffect} from "react";

import EntertainmemtCard from "../components/Entertainment/Entertainmentcard.component";

//import PosterPics from "../components/config/PosterImages.config";

import PosterSlider from "../components/PosterSlider/PosterSlider.component";

import axios from "axios";



const HomePage = () => {  

    const [popularMovies,setPopularMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async() => {
          const getImages = await axios.get("/movie/popular");
          setPopularMovies(getImages.data.results);
        };
        requestPopularMovies();
      }, []);


    const [recommendedMovies,setRecommendedMovies] = useState([]);

    useEffect(() => {
        const requestRecommendedMovies = async() =>{
            const getImages = await axios.get("/movie/upcoming");
            setRecommendedMovies(getImages.data.results);
        };
        requestRecommendedMovies();
    },[]);
    return (
        <>
            <div class="flex-col">
                {/* Recomended Movies */}
                <div class="container mx-auto mt-5">
                    <div class="flex justify-between p-3">
                        <h1 class="text-2xl font-bold text-gray-700">Recommended Movies</h1>
                        <a id="seeall" href="https://in.bookmyshow.com/explore/stream-movies-bms-premier" class=" text-red-400 cursor-pointer">See All ›</a>
                    </div>

                    <PosterSlider images={recommendedMovies} isDark={false}/>
                </div>


                {/* EntertainmemtCard */}
                <div class="container mx-auto">
                    <div class="px-0 py-20 md:py-20 md:px-4">
                        <img class="cursor-pointer" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png" alt="Stream"/>
                    </div>

                    <h1 class="text-2xl font-bold text-gray-700" >The Best of Entertainment</h1>
                    <EntertainmemtCard />

                    <br/>
                </div>

                {/* Premier Section */}
                <div id="premier" class="p-0">
                    <div class="container mx-auto px-4">
                        <div class="py-8">
                            <img class="cursor-pointer" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="inside"/>
                        </div>
                        <div class="pb-8">
                        <PosterSlider images={popularMovies} title="Online Streaming Events" isDark={true}/>
                        </div>
                    </div>
                </div>

                {/* Online Streem */}
                <div class="container mx-auto px-4">

                    <div class="flex justify-between px-4  pt-8  pb-0">
                        <h1 class="text-2xl font-bold text-gray-700">Online Steraming Events</h1>
                        <a id="seeall" href="https://in.bookmyshow.com/explore/stream-movies-bms-premier" class=" text-red-400 cursor-pointer">See All ›</a>
                    </div>

                    <PosterSlider images={popularMovies} isDark={false}/>
                </div>


                {/* Outdoor Events */}
                <div class="container mx-auto px-4">

                    <div class="flex justify-between px-4  pt-24  pb-0">
                        <h1 class="text-2xl font-bold text-gray-700">Outdoor Events</h1>
                        <a id="seeall" href="https://in.bookmyshow.com/explore/stream-movies-bms-premier"  class=" text-red-400 cursor-pointer">See All ›</a>
                    </div>

                    <PosterSlider images={popularMovies} isDark={false}/>
                </div>


                {/* Laughter Therapy */}
                <div class="container mx-auto px-4">

                    <div class="flex justify-between px-4  pt-24  pb-0">
                        <h1 class="text-2xl font-bold text-gray-700">Laughter Therapy</h1>
                        <a id="seeall" href="https://in.bookmyshow.com/explore/stream-movies-bms-premier" class=" text-red-400 cursor-pointer">See All ›</a>
                    </div>

                    <PosterSlider images={popularMovies} isDark={false}/>
                </div>



            </div>
        </>
    );
}

export default HomePage;