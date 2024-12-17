import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from "./routes/internalRoutes";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="backgroundImage"> */}
      {/* <Navbar /> */}

      {/* internal routing like this but not recommended */}

      {/* <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/aboutUS" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes> */}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      {/* </div> */}
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
