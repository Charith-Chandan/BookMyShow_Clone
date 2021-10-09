import React from "react";

import MoviepageHero from "../components/MoviepageHero/Moviepage.Hero.Component";

import MoviesCastCrew from "../components/MoviepageHero/Moviepage.cast&crew";


const Movies = () =>
{
    return(
        <>
           <MoviepageHero/>

           <div class="my-12 container mx-auto px-4 lg:ml-20 lg:w-3/4">
               <div class="flex flex-col items-start gap-3">
                   <h2 class="font-bold text-2xl">About the movie</h2>
                   <p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
               </div>

               <hr class="my-10"/>

               <div class="flex-col items-start">
                   <h2 class="font-bold text-2xl pb-6">Applicable offers</h2>
                   <div class="border-dashed border-2 rounded-lg gap-2 border-yellow-300 bg-yellow-100 flex p-3 w-1/2">
                        <div>
                            <img class="h-10 w-10" src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?17022021111052" alt="Bookmyshow icon"/>
                        </div>
                        <div>
                            <h3>
                                Filmy Pass
                            </h3>
                            <p>
                            Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99
                            </p>
                        </div>
                   </div>
               </div>
               <hr class="my-10"/>
           </div>

            <div class="my-12 container mx-auto px-4 lg:ml-20 lg:w-3/4">
                <h1 class="font-bold text-2xl pb-6">
                    Cast
                </h1>

                <MoviesCastCrew class="m-0 p-0"/>
            </div>

            <hr class="my-10 px-4 lg:ml-20 lg:w-3/4"/>

            <div class="my-12 container mx-auto px-4 lg:ml-20 lg:w-3/4">
                <h1 class="font-bold text-2xl pb-6">
                    Crew
                </h1>

                <MoviesCastCrew class="m-0 p-0"/>
            </div>
        </>
    );
}

export default Movies; 