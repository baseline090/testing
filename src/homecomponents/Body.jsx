import React from "react";
import LabTest from "./LabTest";
import Articles from "./Articles";
import Footer from "./Footer";
import networkAds from "../images/networkAds.png"

import Services from "./Services";

const Body = () => {
  return (
    <>
      <main className="maindivuser">
        <LabTest />
        <Services />
        <Articles />
        <section className="flex justify-center ">
          <img src={networkAds} alt="Full width image" className="w-12/12 h-76 " />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Body;
