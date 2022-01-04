import "./styles/header.styles.css";
import "./styles/footer.styles.css";
import { AboutUsPage } from "./pages/AboutUs";
import { HomePage } from "./pages/Home";
import { useState } from "react";
import * as Scroll from "react-scroll";

function App() {
  const [page, setPage] = useState(<HomePage />);

  let scroll = Scroll.animateScroll;

  return (
    <div className="body">
      <div id="header-body">
        <div id="header-items">
          <h1 id="title-text">ZOIR-SITE</h1>
          <div id="header-items-right">
            <h1
              className="header-button"
              onClick={() => {
                setPage(<HomePage />);
                scroll.scrollToTop({ duration: 400 });
              }}
            >
              Home
            </h1>
            <h1
              className="header-button"
              onClick={() => {
                setPage(<HomePage />);
                scroll.scrollToTop({ duration: 400 });
              }}
            >
              Projects
            </h1>
            <h1
              className="header-button"
              onClick={() => {
                setPage(<AboutUsPage />);
                scroll.scrollToTop({ duration: 400 });
              }}
            >
              About Us
            </h1>
            <h1
              className="header-button"
              onClick={() => {
                setPage(<HomePage />);
                scroll.scrollToTop({ duration: 400 });
              }}
            >
              Contact
            </h1>
          </div>
        </div>
      </div>
      {page}
      <div id="footer-body">
        <div id="footer-inner-body1">
          <h1 id="footer-contact-us-text">CONTACT US</h1>
          <div id="footer-inner-body2">
            <div id="footer-inner-body2-left">
              <h1 id="footer-email">zoir@site.ca</h1>
              <h1 id="footer-phone">555-555-5555</h1>
              <h1 id="footer-located-in-vancouver">Located in Vancouver</h1>
            </div>
            <div id="footer-inner-body2-right">
              <h1
                id="footer-home-button"
                className="footer-buttons"
                onClick={() => {
                  setPage(<HomePage />);
                  scroll.scrollToTop({ duration: 400 });
                }}
              >
                Home
              </h1>
              <h1
                id="footer-about-us-button"
                className="footer-buttons"
                onClick={() => {
                  setPage(<AboutUsPage />);
                  scroll.scrollToTop({ duration: 400 });
                }}
              >
                About Us
              </h1>
              <h1
                id="footer-newsletter-button"
                className="footer-buttons"
                onClick={() => {
                  setPage(<HomePage />);
                  scroll.scrollToTop({ duration: 400 });
                }}
              >
                Contact
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
