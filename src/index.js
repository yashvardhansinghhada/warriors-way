import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router.jsx"
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
 
ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
   <div>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
    </div>
 </React.StrictMode>
);