import React from "react";

const Partner = () => {
  return (
    <>
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="my-14 uppercase">
          <h2 className="text-2xl font-bold text-center">
            ---- We Are
            <span className="text-[#066466]"> Associate With</span> ----
          </h2>
        </div>
        <div className="my-14 md:grid grid-cols-5 items-center space-y-8 md:space-y-0cl px-5 py-10 rounded-md gap-10 bg-gradient-to-r from-[#066466] to-[#03dee2]">
          <div>
            <img
              src="https://i.ibb.co/b7bhxWX/partner3.png"
              alt="partner image"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/x3DycvP/partner5.png"
              alt="partner image"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/thC0Nqv/partner6.png"
              alt="partner image"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/Ct6WFnC/partner2.png"
              alt="partner image"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/2s1dWmC/partner1.png"
              alt="partner image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
