
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Elog from "./pages/Elog";
import "./style.scss"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
      
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/write",
        element: <Write />,
      },{
        path : "/post/:id",
        element :<Single/>
      },
 
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path :"/login",
    element :<Elog/>
  }
]);
function App() {
  return (
    <div className="app">
      <div className="container">
       <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
