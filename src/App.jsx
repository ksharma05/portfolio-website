import TopBar from "./assets/components/TopBar";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let scroller = ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
    scroller.effects(".box", {speed: 0.5, lag: 0.1});
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
    return () => ctx.revert();
  });

  return (
    <>
      <TopBar />
      <div className="App" id="box" ref={component}>
        <div className="flex flex-col justify-center items-center h-screen bg-amber-400" >
          <h1>Testing horizontal scrolling w/ three sections</h1>
          <h2>First Container</h2>
        </div>
        <div className="flex flex-col justify-center items-center h-screen bg-amber-400">
          <h1>Testing horizontal scrolling w/ three sections</h1>
          <h2>New Container</h2>
        </div>
        <div ref={slider} className="h-screen w-[400vw] flex flex-wrap">
          <div className="description h-screen w-screen bg-blue-700">
            <div>
              SCROLL DOWN
              <div className="scroll-down">
                <div className="arrow"></div>
              </div>
            </div>
          </div>
          <div className="panel h-screen w-screen bg-purple-500">New Container</div>
          <div className="panel h-screen w-screen bg-red-500">ONE</div>
          <div className="panel h-screen w-screen bg-orange-400">TWO</div>
          <div className="panel h-screen w-screen bg-emerald-500">THREE</div>
        </div>
        <div className="flex h-screen bg-amber-400">Last Container</div>
      </div>
    </>
  );
}

export default App;
