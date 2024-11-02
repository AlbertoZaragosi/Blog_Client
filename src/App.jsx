import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Write from "./pages/Write"
import Single from "./pages/Single"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./style.css"

//This way we create always the same structure where the content would be between Navbar and Footer
const Layout = () =>{
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

//Routes to the different pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    //Now, we will declarate the children, which means the pages that will be
    //in the middle of the Navbar and the Footer
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/post/:id",//This way we can show a single post by its Id
        element: <Single/>
      },
      {
        path: "/write",
        element: <Write/>
      },
      
      
    ]
  },
  //This ones doesn't need Navbar or footer so we can put it outside
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}





export default App;
