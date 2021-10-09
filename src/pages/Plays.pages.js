import React from "react";

import PlayCard from "../components/PlayPage/PlayPage.Cards";

import PlaysFilter from "../components/PlayPage/PlayFilter.Component";

const Plays = () =>
{
    return(
        <>
            <div class="container mx-auto px-4 mt-8">

                <div class="w-full lg:flex lg:flex-row-reverse">
                    <div class="w-8/12">
                        <h2 class="text-2xl font-bold">Plays in Palamaner</h2>
                        <PlayCard/>
                        <PlayCard/>
                    </div>

                    <div class="lg:w-1/4 ">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        
                        <div class="bg-white rounded-md p-3 mr-10 mb-1">
                            <PlaysFilter title="Date" tags={["Today", "Tomorrow"]}/>
                        </div>
                        
                        <div class="bg-white rounded-md p-3 mr-10 mb-1">
                            <PlaysFilter title="Language" tags={["Telugu","English","Tamil", "Kannada"]}/>
                        </div>

                        <div class="bg-white rounded-md p-3 mr-10 mb-1">
                            <PlaysFilter title="Categories" tags={["Theatre","OTT"]}/>
                        </div>

                        <div class="bg-white rounded-md p-3 mr-10 mb-1">
                            <PlaysFilter title="Price" tags={["Free",">200",">500",">1999"]}/>
                        </div>

                        <div class="bg-white rounded-md p-3 mr-10 mb-1">
                            <PlaysFilter title="Genres" tags={["Comedy","Sci-Fi","Drama"]}/>
                        </div>
                    </div>
                </div>  

            </div>

        </>
    );
}

export default Plays;