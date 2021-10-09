import React from "react";

import {BiShareAlt,BiHeart} from "react-icons/bi";

const launchRazorPay = () =>
{
    let options =
    {
        key: "rzp_test_1P8HMjhNg3fuAb",
        amount: 500000,
        currency: "USD",
        name: "Book My Show Clone",
        description: "Apple MacBook Air M1",
        image: "https://www.macobserver.com/wp-content/uploads/2019/03/workfeatured-apple-logo.png",
        handler: () =>
        {
            alert("Payment Successful")
        },
        theme: {color: "#000000"}
    };

    let razorpay = new window.Razorpay(options);
    razorpay.open();
};

const MoviepageHero = () =>
{
    return(
        <>
        <div class="md:hidden">
            <img class="p-2 pb-0 rounded-t-xl" src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="movieimg"/>
            <span class="bg-black block rounded-b-lg text-center p-2 mx-2 text-white text-xs">In cinemas</span>
        </div>

        <div class="hidden lg:hidden md:block">
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="movieimg"/>
        </div>

        <div class=" relative hidden lg:block" style={{height:"31rem"}}>
            <img class=" absolute w-full h-full pl-10" src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="movieimg"/>
            <div class="absolute h-full w-full z-1" style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}/>
            
            <div class="absolute w-64 h-96 left-20 top-10">
                <img class="w-full h-full rounded-t-xl" src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="shang-chi"/>
                <span class="bg-black block rounded-b-lg text-center p-2 text-white text-xs">In cinemas</span>
            </div>

            <div class="text-white text-4xl font-bold">
                <h1 class="absolute left-96 top-14 flex-wrap">Shang-Chi and the Legend of <br/>the Ten Rings</h1>
                <span class="absolute right-8 bg-gray-500 opacity-75 text-2xl top-14 inline-flex p-2 rounded-l-md"><BiShareAlt/>share</span>
                <span class="absolute fill-current text-navCol-250 left-96 top-40 inline-flex"><BiHeart id="heart"/><span class="text-white font-medium text-2xl p-2 pt-0.5">90%</span><span class="text-white text-xl font-normal pt-1.5">55.3K ratings</span></span>
                <div class="absolute bg-navCol-2 flex w-96 justify-between left-96 top-52 p-2 rounded-lg">
                    <div>
                    <h1 class="text-xl font-medium">Add your ratings & review</h1>
                    <h2 class=" text-lg font-normal">Your rating matter</h2>
                    </div>
                    <buttton class="bg-white h-1/2 pt-2 text-black text-xl p-2 rounded-lg">Rate now</buttton>
                </div>
            </div>
            <h1 class=" absolute bg-white rounded-sm p-0.25 left-96 top-72 text-black">2D,4DX,MX4D,3D,4DX 3D,IMAX 2D,IMAX 3D</h1>  
            <h1 class=" absolute bg-white rounded-sm p-0.25 left-96 top-80 text-black">English,Tamil,Telugu,Hindi,Kannada,Malayalam</h1>  
            <h1 class=" absolute left-96 bottom-28 text-white">2h 12m • Action, Adventure, Fantasy • UA • 3 Sep, 2021</h1>  

            <button onClick={launchRazorPay} class="absolute text-white left-96 rounded-lg bottom-8 bg-navCol-250 px-10 py-3">Book tickets</button>
        </div>
        </>
    );
}

export default MoviepageHero;