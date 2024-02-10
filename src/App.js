import logo from "./logo.svg";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Footer from "./component/Footer";
import Certificates from "./page/Certificates";
import "./assets/styles/global.scss";
import React from "react";
import { Button } from "react-bootstrap";
import { BsArrowUp } from "react-icons/bs";
import ReactGA from "react-ga4";

ReactGA.initialize("G-SDR1WHYRBQ");


function App() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    document.title = "Ravi Verma";
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Footer />
      <Button  style={{ display: visible ? "block" : "none" }}className="my-3 position-fixed start-50 bottom-0">
        <BsArrowUp
          onClick={scrollToTop}
        />
      </Button>
    </div>
  );
}

export default App;
