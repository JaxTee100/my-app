import React from "react";
import Pricing from "../../Pricing";
import HeroSection from "../HeroSection";
import { homeObjFour } from "./Data";


const Services = () => {
    return(
    <>
        

        <Pricing />
        <HeroSection {...homeObjFour} />
    </>
    )
}


export default Services;