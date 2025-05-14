import Body from "./components/Body";
import Landing from "./components/Landing";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import TopBar from "./components/TopBar";
import Album from "./components/Album";



function App() {
  const routerConfig = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children:[{
      path: "/",
      element: <Landing />,
    },{
      path: "/portfolio",
      element: <Portfolio />,
    },{
      path: "/about",
      element: <About />,
    },{
      path: "/contact",
      element: <Contact />,
    },{
      path: "/portfolio/:id",
      element: <Album />
    }]
  },{
    path:"error",
    element: <ErrorPage />,
  }]);
  return (
    <>
    
      <RouterProvider router={routerConfig} />
      
     
    </>
  );
}

export default App;
