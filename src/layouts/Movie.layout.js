import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.component";
import MyFooter from "../components/Footer/Footer.Component";
 
const MovieLayout = (props) => {
  return (
    <>
    <MovieNavbar />
    {props.children}
    <MyFooter/>
    </>
  );
};
export default MovieLayout;
