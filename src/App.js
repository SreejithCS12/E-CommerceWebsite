import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products"; 
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";


 const Layout =() =>{
  return (
    <div className ="App">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
  
  
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products/:id",
        element: <Products/>,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },
    ],
  },
 
]);

function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}


export default App;

