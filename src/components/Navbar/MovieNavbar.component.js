import React from 'react';
import Bookmyshow from './Img/logo.png'

import {BiSearch,BiChevronDown,BiShareAlt} from "react-icons/bi";
import {IoMenuOutline} from "react-icons/io5";

const NavSm = () => {
return (
<>
    <div class="text-white flex items-center justify-between">
        <div>
            <h3 id="start" class="text-2xl font-semibold tracking-low">It All Starts Here!</h3>
        </div>

        <div class="w-8 h-8">
            <BiShareAlt  class="w-full h-full cursor-pointer"/>
        </div>
    </div>

                                 
</>
)
};
const NavMd = () => {
return (
<>
    <div class="w-full flex items-center bg-white gap-3 px-3 py-2 rounded">
        <BiShareAlt/>
        <input class="w-full focus:outline-none rounded" type="search" placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
    </div>
</>
)
};
const NavLg = () => {
return (
    <>
        <div class=" container flex-col items-center justify-between mx-auto">
            <div class=" container flex justify-between items-center mx-auto">
                {/* left */}
                <div class="flex items-center w-1/2 gap-5">

                    <div>
                        <img id="logo" class="w-full h-full" src={Bookmyshow} alt="logo"/>
                    </div>

                    <div class="w-full flex items-center bg-white gap-3 px-2 py-1 rounded">
                        <BiSearch />
                        <input class="w-full focus:outline-none" type="search" placeholder="Search for Movies, Events, Plays, Sports and Activities"></input>
                    </div>

                </div>

                {/* Right */}
                <div class="flex items-center gap-5">

                    <span class="text-gray-300 text-xs flex items-center cursor-pointer hover:text-white">
                            Palamaner <BiChevronDown/>
                    </span>

                    <button id="but" class="px-3 py-1 text-sm rounded text-white">Sign in</button>

                    <div class="w-8 h-8 text-white items-center">
                    <IoMenuOutline class="w-full h-full font-thin cursor-pointer"/>
                    </div>

                </div>
            </div>


            {/* Bottom */}

            <div class="flex justify-between p-4 text-sm">
                <div>
                    <ul class="flex text-gray-300 gap-3 cursor-pointer">
                        <li class="hover:text-white" ><p>Movies</p></li>
                        <li class="hover:text-white"><p>Stream <sup class="text-pink-600 -left-3 -inset-y-3">New</sup></p></li>
                        <li class="hover:text-white"><p>Events</p></li>
                        <li class="hover:text-white"><p>Plays</p></li>
                        <li class="hover:text-white"><p>Sports</p></li>
                        <li class="hover:text-white"><p>Activities</p></li>
                        <li class="hover:text-white"><p>Buzz</p></li>
                    </ul>
                </div>

                <div>
                    <ul class="flex text-gray-300 gap-3 cursor-pointer hover:text-white">
                        <li class="hover:text-white"><p>ListYourShow <sup class="text-pink-600 -left-3 -inset-y-3">New</sup></p></li>    
                        <li class="hover:text-white"><p>Corporates</p></li>
                        <li class="hover:text-white"><p>Offers</p></li>
                        <li class="hover:text-white"><p>Gift Cards</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
)
};
const MovieNavbar = () => {
return (
<>
<nav id="nav" class="bg-navCol-700 md:bg-navCol-800">
   <div className="md:hidden">
      {
      <NavSm />
      }
   </div>
   <div className="hidden lg:hidden md:block">
      {
      <NavMd />
      }
   </div>
   <div className="hidden lg:flex">
      {
      <NavLg />
      }
   </div>
</nav>
</>
)
};
export default MovieNavbar;
