import React from "react";

const Poster = (props) =>
{
    return(
        <>
                <div id="cut" class="container flex flex-col items-start gap-2 px-3">
                    <div>
                        <img class="rounded-lg" src={props.src} alt={props.title}/>
                    </div>

                    {/* <div class="h-80">
                        <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-xl"/>
                    </div> */}

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

const PlayCard = () =>
{
    return(
        <>
            <div className="flex flex-wrap">
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster class="w-1/2 md:w-1/3 my-3 lg:w-1/4"
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICA1Nzkgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122112-gbruccttgh-portrait.jpg"
                        title="A Funny thing called Life"
                        subtitle="English ₹250"
                    />
                </div>
            
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster class="w-1/2 md:w-1/3 my-3 lg:w-1/4"
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00315223-kyantwjbfn-portrait.jpg"
                        title="Multiple Venues"
                        subtitle="English ₹199"
                    />
                </div>

                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster class="w-1/2 md:w-1/3 my-3 lg:w-1/4"
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315142-leqnjzllbt-portrait.jpg"
                    title="Dum Biryani - 15th Oct"
                    subtitle="English ₹199"
                    />
                </div>
            </div>
        </>
    );
}

export default PlayCard;