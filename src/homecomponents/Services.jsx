import React from "react";
import group1 from "../images/Group 13895151.png";
import group2 from "../images/Group 13895152.png";
import group3 from "../images/Group 13895150.png";
import group4 from "../images/Group 13895149.png";

const Services = () => {
  return (
    <>
      <section
        id="features"
        className="relative block px-8 py-10 md:py-20 md:px-20"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <h2 className="block w-full bg-black bg-clip-text font-bold text-transparent text-4xl uppercase mb-4 sm:text-5xl">
            Our Services
          </h2>
          <div className="items-center flex justify-center">
            <h3 className="flex items-center w-36">
              <span className="flex-grow bg-black rounded h-1"></span>
            </h3>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl z-10 grid grid-cols-1  pt-14 sm:grid-cols-4 lg:grid-cols-4">

          <div className="bg-transparant px-2 py-3 text-center ">
            <img src={group1} alt="Service one" className="mx-auto w-20 h-16 mb-4" />
            <h3 className="mt-6 text-black font-semibold text-xl uppercase">
              CT Scan
            </h3>
          </div>
          <div className="bg-transparant px-2 py-3 text-center ">
            <img src={group4} alt="Service one" className="mx-auto w-20 h-16 mb-4" />
            <h3 className="mt-6 text-black font-semibold text-xl uppercase">
            Master Health Checkup
            </h3>
          </div>

          <div className="bg-transparant px-2 py-3 text-center ">
            <img src={group2} alt="Service two" className="mx-auto w-20 h-16 mb-4" />
            <h3 className="mt-6 text-black font-semibold text-xl uppercase">
              MRI Scan
            </h3>
          </div>

          <div className="bg-transparant px-2 py-3 text-center ">
            <img src={group3} alt="Service three" className="mx-auto w-20 h-16 mb-4" />
            <h3 className="mt-6 text-black font-semibold text-xl uppercase">
              PET Scan
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
