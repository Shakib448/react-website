import React from "react";
import web from "../src/Image/Mask Group-4.png"
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common
            name='Welcome to My About'
            imgsrc={web}
            visit="/contact"
            btname= "Contact Now"
            />
        </>
    );
};

export default About;