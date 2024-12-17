import Main from "../pages/mainPage/Main";
import ContactUs from "../pages/contactUs/ContactUs";
import About from "../pages/about/About";
// import CaseStudy from "../pages/caseStudy/CaseStudy";
import OurProject from "../pages/our-projects/OurProject";
import Gallery from "../pages/gallery/Gallery";

const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/our-projects",
    element: <OurProject />,
  },
  {
    path: "/aboutUS",
    element: <About />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
];

export default routes;
