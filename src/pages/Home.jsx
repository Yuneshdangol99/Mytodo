import React from "react";
import HomeContent from "../component/HomepageContent/HomeContent";

function Home() {
  return (
    <div className="w-4/5 flex items-center justify-center px-8 py-8">
      <div className="relative w-full h-full  flex items-center justify-center border-4 border-primary z-20">
        <div className="absolute top-0  w-1 h-36 bg-primary z-10"></div>
        <HomeContent />
      </div>
    </div>
  );
}

export default Home;
