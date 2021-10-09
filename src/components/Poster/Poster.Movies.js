import React from "react";

const Poster = (props) =>
{
    return(
        <>
                <div id="cut" class="container flex flex-col items-start gap-2 px-3">
                    {/* <div>
                        <img class="rounded-lg" src={props.src} alt={props.title}/>
                    </div> */}

                    <div class="h-80">
                        <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-xl"/>
                    </div>

                    <h3 class={`text-lg font-bold flex-wrap ${props.isDark ? "text-white" : "text-gray-700"}`}>
                    {props.title}
                    </h3>

                    <p class={`text-sm font-bold cut-text ${props.isDark ? "text-white" : "text-gray-700"}`}>
                    {props.subtitle}
                    </p>
                </div>  
        </>
    );
}

export default Poster;