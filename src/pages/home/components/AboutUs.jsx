import React from "react";
import img from "../../../assets/images/EBHAR.svg";

function AboutUs() {
  return (
    <>
      <div className="AboutUsContent content">
        <div className="AboutUs">
          <h2>
            <img src={img} alt="logo" />
          </h2>
          <p>
            This text is an example of text that can be replaced in the same
            space. This text was generated from the Arabic text generator, where
            you can generate such text or many other texts in addition to
            increasingincreasing the number of letters that the application
            generates.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
