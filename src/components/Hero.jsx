import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 760) {
        setVideoSrc(smallHeroVideo);
      } else {
        setVideoSrc(heroVideo);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      duration: 1.5,
      delay:1.5,
    });
    gsap.to("#cta", {
      opacity: 1,
      duration: 1.5,
      y:-50,
      delay:1.5 ,
    });
    
  });

  return (
    <section className="w-full min-h-svh bg-black flex flex-col justify-center relative">
      <div className="h-5/6 w-full flex items-center justify-center flex-col">
        <p
          id="hero"
          className="text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10"
        >
          iPhone 15 Pro
        </p>
        <div className="max-md:w-10/12 w-9/12">
          <video autoPlay muted playsInline key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex flex-col items-center opacity-0 my-5 -translate-y-20" id="cta">
        <a className="px-5 bg-blue py-2 my-5 rounded-3xl hover:bg-blue-400 active:text-black active:bg-blue-300" >Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
