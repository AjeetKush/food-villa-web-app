import React from 'react';
import BurgerImage from "../images/BurgerImage.png";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between py-16 px-8 bg-gray-100">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to <br /> The World of <br /> <span className="text-orange-500">Tasty & Fresh Food</span>
        </h1>
        <br></br>
        <h4 className="text-xl text-gray-600 mb-8">
          <span className="text-3xl text-orange-500 font-bold">Food Villa:</span> Where Taste Meets Elegance!
        </h4>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img src={BurgerImage} alt="Food Image" className="w-full h-auto rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default About;
