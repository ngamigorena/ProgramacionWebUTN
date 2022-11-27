import React from "react";
import './cardHeaderSection.css';

const CardHeaderSection = ({tittleHeroSection,fraseHeroSection}) => {

    return(

        <div className="heroEachSectionContainer">
            <div class="titteleHeroSection">
                <h1>{tittleHeroSection}</h1>
            </div>
           {/*  <div class="fraseHeroSection">
                <h4>{fraseHeroSection}</h4>
            </div> */}
        </div>
    


    )
};

export default CardHeaderSection;