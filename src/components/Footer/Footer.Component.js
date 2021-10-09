import React from "react";
import {SiFacebook,SiInstagram,SiYoutube} from "react-icons/si";
import {IoLogoTwitter} from "react-icons/io"

const MyFooter = () =>
{
    return(
        <>
            <div class="bg-navCol-800 flex flex-col items-center p-5 mt-10 pt-24">
                <div class="flex items-center flex-col w-28 h-28">
                    <img class="text-center" src="/static/media/logo.0aa56698.png" alt="BMSlogo"/>
                </div>

                <div class="flex justify-center p-4 cursor-pointer pt-10">
                    <SiFacebook class="w-10 h-10 m-2"/>
                    <SiInstagram class="w-10 h-10 m-2"/>
                    <IoLogoTwitter class="w-10 h-10 m-2"/>
                    <SiYoutube class="w-10 h-10 m-2"/>
                </div>

                <h1 class="text-xl text-center text-white font-bold p-3">Copyright 2021 © Charith Chandan</h1>
            </div>
        </>
    );
};

export default MyFooter;