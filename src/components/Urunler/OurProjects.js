import React from "react";
import Slider from "./Slider";
import slides from "./mock.json";

const OurProjects = () => {
  return (
    <div className="w-full px-20 pt-20 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-center text-[#001653] mb-4 ">Ürünlerimiz</h2>
      <Slider slides={slides} />
    </div>
  );
};

export default OurProjects;
