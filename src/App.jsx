import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Navbar,
  Hero,
  Testimonials,
  Services,
  Footer,
  Publications,
  Gallery,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Testimonials />
                <Gallery />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
