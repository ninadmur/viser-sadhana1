import React, { useState } from "react";
import Button from "../../multiusable/button";

const Diseasemodal = ({ setDiseaseModal }) => {
  return (
    <>
      <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-30">
        <div className="relative w-1/3 mx-auto mt-[15%] bg-white h-[25%]">
          <i
            onClick={() => setDiseaseModal(false)}
            className="absolute right-5 top-3 fa-solid fa-xmark"
          ></i>
          <div className="px-14 py-4">
            <h1 className="font-bold text-2xl text-center">Add Disease</h1>
            <div className="mt-8">
              <label className="ml-3 font-bold">Name</label>
              <input
                className="border-2 w-full border-black h-10"
                type="text"
                // onChange={(e) => setName(e.target.value)}
                placeholder="Enter...."
              />
            </div>
            <div className="float-right mt-5">
              <Button label="Add Disease" color="bg-[#8FECFF]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diseasemodal;
