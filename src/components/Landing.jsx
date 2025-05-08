import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "../templates/Section";
import Panel from "../templates/slider/Panel";
import IntroSlider from "../templates/slider/IntroSlider";

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
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className="App" ref={component}>
      <Section>
        <div className="h-full w-full bg-[url(src/assets/HeroImage.png)] bg-center bg-cover bg-no-repeat " >
          <div className="h-full w-full bg-radial to-black">
            <span className="relative top-[90%] left-1/2 -transform-y-1/2 text-center">Scroll 🠋</span>
          </div>
        </div>
      </Section>
      <Section>
        <div className="w-11/12 h-11/12 flex">
          <div className="w-4/12 flex justify-center items-end">
            <img src="src/assets/SubImage1.png" alt="Couple Image" className="h-4/6 " />
          </div>
          <div className="w-4/12 flex flex-col whitespace-nowrap justify-center items-center z-10 ">
            <p className="text-6xl font-bold">Some title to showcase USP </p>
            <p className="text-6xl font-bold"> or anything you like.</p>
            <p className="w-full whitespace-normal mt-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
          <div className="w-4/12 flex justify-center items-start">
            <img src="src/assets/SubImage2.png" alt="Groom Image" className="h-4/6 " />
          </div>
        </div>
      </Section>
      <div ref={slider} className="h-screen w-[500vw] flex flex-wrap">
        <IntroSlider>
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </IntroSlider>
   
         <Panel >
          One More
        </Panel>
        <Panel >
          2 More
        </Panel>
        <Panel >
          3 More
        </Panel>
        <Panel >
          4 More
        </Panel>
        <Panel>
          Let's see
        </Panel>
      </div>
      <Section>
        <h2>Last Section</h2>
      </Section>
    </div>
  );
};

export default Landing;
