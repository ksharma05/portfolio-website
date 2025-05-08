import { Outlet } from "react-router";
import TopBar from "./TopBar";
import Landing from "./Landing";

const Body = () => {
 
  return (
   <>
    <TopBar />
    <Outlet />
   </>
  );
};

export default Body;
