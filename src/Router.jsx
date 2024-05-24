import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NdaWritten from "./components/NdaWritten";
import SsbCounseling from "./components/SSB_counseling";
import LoginForm from "./components/Login";

const router= createBrowserRouter([
{
path:"/",
element:<Home />
},
{
path:"/about",
element:<About />
},
{
path:"/contact",
element:<Contact />
},
{
path:"/ndawritten",
element:<NdaWritten />
},
{
path:"/ssbcounseling",
element:<SsbCounseling />
},
{
path:"/login",
element:<LoginForm />
},
]);
export default router;