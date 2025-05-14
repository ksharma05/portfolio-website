import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tween } from "gsap/gsap-core";
import Panel from "../templates/slider/Panel";
import {
  ALBUM_COVER_URL,
  ALBUM_COVER_URL_2,
  ALBUM_COVER_URL_3,
  ALBUM_COVER_URL_4,
} from "../utility/Constants";
import ParallaxSections from "./ParallaxSections";


gsap.registerPlugin(ScrollTrigger);
const Portfolio = () => {
  const component = useRef();
  const slider = useRef();

  useEffect(() => {
    if (!slider.current || !component.current) return;

    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 0.1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          animation: Tween,
        },
      });
    }, component);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <ParallaxSections />
      
    </>
  );
};

export default Portfolio;


  // <div className="App" ref={component}>
    //   <div ref={slider} className="h-screen w-[500vw] flex flex-wrap slider">
    //     <Panel>
    //         <figure className="relative w-full h-full">
    //                 <img
    //                   className="w-full h-full object-cover object-top"
    //                   src={ALBUM_COVER_URL}
    //                   alt="edinburgh"
    //                 />
    //                 <figcaption className="flex content-center justify-center absolute w-full h-full top-0 left-0 ">
    //                   <div className="flex flex-col justify-center items-center p-6">
    //                     <h2 className="inline-block px-2 py-3.5 font-bold text-center bg-base-100 ">Trish ki Shadi</h2>
    //                     <p className="inline-block px-2 py-3.5 font-bold text-center bg-yellow-800 mt-4">Checkout Album ➙</p>
    //                   </div>
    //                 </figcaption>
    //               </figure>
    //     </Panel>
    //     <Panel>
    //       {" "}
    //       <figure className="relative w-full h-full">
    //         <img
    //           className="w-full h-full object-cover object-top"
    //           src={ALBUM_COVER_URL_2}
    //           alt="edinburgh"
    //         />
    //         <figcaption className="flex content-center justify-center absolute w-full h-full top-0 left-0 ">
    //           <div className="flex flex-col justify-center items-center p-6">
    //             <h2 className="inline-block px-2 py-3.5 font-bold text-center bg-base-100 ">
    //               Shantanu X Ashna
    //             </h2>
    //             <p className="inline-block px-2 py-3.5 font-bold text-center bg-yellow-800 mt-4">
    //               Checkout Album ➙
    //             </p>
    //           </div>
    //         </figcaption>
    //       </figure>
    //     </Panel>
    //     <Panel>
    //       {" "}
    //       <figure className="relative w-full h-full">
    //         <img
    //           className="w-full h-full object-cover object-top"
    //           src={ALBUM_COVER_URL_3}
    //           alt="edinburgh"
    //         />
    //         <figcaption className="flex content-center justify-center absolute w-full h-full top-0 left-0 ">
    //           <div className="flex flex-col justify-center items-center p-6">
    //             <h2 className="inline-block px-2 py-3.5 font-bold text-center bg-base-100 ">
    //               Example1 ki Shadi
    //             </h2>
    //             <p className="inline-block px-2 py-3.5 font-bold text-center bg-yellow-800 mt-4">
    //               Checkout Album ➙
    //             </p>
    //           </div>
    //         </figcaption>
    //       </figure>
    //     </Panel>
    //     <Panel>
    //       {" "}
    //       <figure className="relative w-full h-full">
    //         <img
    //           className="w-full h-full object-cover object-bottom"
    //           src={ALBUM_COVER_URL_4}
    //           alt="edinburgh"
    //         />
    //         <figcaption className="flex content-center justify-center absolute w-full h-full top-0 left-0 ">
    //           <div className="flex flex-col justify-center items-center p-6">
    //             <h2 className="inline-block px-2 py-3.5 font-bold text-center bg-base-100 ">
    //               Example2 ki Shadi
    //             </h2>
    //             <p className="inline-block px-2 py-3.5 font-bold text-center bg-yellow-800 mt-4">
    //               Checkout Album ➙
    //             </p>
    //           </div>
    //         </figcaption>
    //       </figure>
    //     </Panel>
    //   </div>
    // </div>