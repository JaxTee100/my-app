import React from "react";
import Pricing from "../../Pricing";
import HeroSection from "../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";


const Products = () => {
    return(
    <>
        <HeroSection {...homeObjOne} />
        <Pricing />
        
    </>
    )
}


export default Products;