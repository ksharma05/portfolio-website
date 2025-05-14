import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSections = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);

    sectionRefs.current.forEach((section, i) => {
      const bg = section.querySelector(".bg");

    //   // Assign a random background image
      bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;

      gsap.fromTo(
        bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const sections = [
    {   id:100,
        title:"Simple parallax sections",
        image:'./assets/images/1.jpg',
    },{   id:101,
        title:"Hey look, a title",
        image:'./assets/images/1.jpg',
    },{   id:102,
        title:"They just keep coming",
        image:'./assets/images/1.jpg',
    },{   id:103,
        title:"So smooth though",
        image:'./assets/images/1.jpg',
    },{   id:104,
        title:"Nice, right?",
        image:'./assets/images/1.jpg',
    },
  ];

  return (
    <div>
      {sections.map((sec) => (
        <section
          key={sec.id}
          ref={(el) => (sectionRefs.current[sec.id] = el)}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="bg absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover" />
          <Link to={`/portfolio/${sec.id}`}>
            <h1 className="text-white text-4xl md:text-5xl font-light text-center drop-shadow-lg pointer hover:underline">
                {sec.title}
            </h1>
          </Link>
        </section>
      ))}
    </div>
  );
};

export default ParallaxSections;
