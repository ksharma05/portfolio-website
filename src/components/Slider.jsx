import React from "react";
import IntroSlider from "../templates/slider/IntroSlider";
import Panel from "../templates/slider/Panel";
import { ALBUM_COVER_URL, ALBUM_COVER_URL_2, ALBUM_COVER_URL_3, ALBUM_COVER_URL_4 } from "../utility/Constants";

const Slider = ({ refer }) => {

  return (
    <div ref={refer} className="h-screen w-[500vw] flex flex-wrap slider">
      <IntroSlider>
        <div className="h-1/2 w-1/2 flex flex-col justify-center items-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border">
          <h2 className="text-6xl font-bold">Ready for a glimpse of</h2>
          <h2 className="text-6xl font-bold">what we do?</h2>
        </div>
      </IntroSlider>
  
      <Panel>
        <figure className="relative w-full h-full">
          <img
            className="w-full h-full object-cover object-top"
            src={ALBUM_COVER_URL}
            alt="edinburgh"
          />
          <figcaption className="flex content-center justify-center absolute w-full h-full top-0 left-0 ">
            <div className="flex flex-col justify-center items-center p-6">
              <h2 className="inline-block px-2 py-3.5 font-bold text-center bg-base-100 ">Trish ki Shadi</h2>
              <p className="inline-block px-2 py-3.5 font-bold text-center bg-yellow-800 mt-4">Checkout Album ➙</p>
            </div>
          </figcaption>
        </figure>
      </Panel>
      <Panel> <figure className="relative w-full h-full">
          <img
            className="w-full h-full object-cover object-top"
            src={ALBUM_COVER_URL_2}
            alt="edinburgh"
          />
          <figcaption className="flex content-center justify-center absolute w-full h-full top-0 left-0 ">
            <div className="flex flex-col justify-center items-center p-6">
              <h2 className="inline-block px-2 py-3.5 font-bold text-center bg-base-100 ">Shantanu X Ashna</h2>
              <p className="inline-block px-2 py-3.5 font-bold text-center bg-yellow-800 mt-4">Checkout Album ➙</p>
            </div>
          </figcaption>
        </figure></Panel>
      <Panel> <figure className="relative w-full h-full">
          <img
            className="w-full h-full object-cover object-top"
            src={ALBUM_COVER_URL_3}
            alt="edinburgh"
          />
          <figcaption className="flex content-center justify-center absolute w-full h-full top-0 left-0 ">
            <div className="flex flex-col justify-center items-center p-6">
              <h2 className="inline-block px-2 py-3.5 font-bold text-center bg-base-100 ">Example1 ki Shadi</h2>
              <p className="inline-block px-2 py-3.5 font-bold text-center bg-yellow-800 mt-4">Checkout Album ➙</p>
            </div>
          </figcaption>
        </figure></Panel>
      <Panel> <figure className="relative w-full h-full">
          <img
            className="w-full h-full object-cover object-bottom"
            src={ALBUM_COVER_URL_4}
            alt="edinburgh"
          />
          <figcaption className="flex content-center justify-center absolute w-full h-full top-0 left-0 ">
            <div className="flex flex-col justify-center items-center p-6">
              <h2 className="inline-block px-2 py-3.5 font-bold text-center bg-base-100 ">Example2 ki Shadi</h2>
              <p className="inline-block px-2 py-3.5 font-bold text-center bg-yellow-800 mt-4">Checkout Album ➙</p>
            </div>
          </figcaption>
        </figure></Panel>
      <Panel>Let's see</Panel>
    </div>
  );
};

export default Slider;
