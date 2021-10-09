import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
import MyFooter from "../components/Footer/Footer.Component";

const DefaultLayout = (props) => {
  return (
    <>
    <Navbar />
    <HeroCarousal/>
    {props.children}
    <MyFooter/>
    </>
  );
};
export default DefaultLayout;
