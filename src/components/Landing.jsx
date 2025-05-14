import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tween } from "gsap/gsap-core";
import Hero from "./Hero";
import SubHero from "./SubHero";
import Stats from "./Stats";
import Slider from "./Slider";


gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
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
          animation: Tween
        },
      });
    }, component);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="App" ref={component}>
      <Hero />
      <SubHero />
      <Slider refer={slider} />
      <Stats />
    </div>
  );
};

export default Landing;
