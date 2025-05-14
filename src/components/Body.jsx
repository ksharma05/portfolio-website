import { Outlet } from "react-router";
import TopBar from "./TopBar";
import Landing from "./Landing";
import Footer from "./Footer";

const Body = () => {
 
  return (
   <>
    <TopBar />
    <Outlet />
    <Footer />
   </>
  );
};

export default Body;
