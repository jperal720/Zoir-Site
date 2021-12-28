import "./styles/header.styles.css";
import "./styles/footer.styles.css";

function App() {
  return (
    <div id="body">
      <div id="header-body">
        <div id="header-items">
          <h1 id="title-text">ZOIR-SITE</h1>
          <div id="header-items-right">
            <h1 className="header-button">HOME</h1>
            <h1 className="header-button">PROJECTS</h1>
            <h1 className="header-button">ABOUT US</h1>
            <h1 className="header-button">CONTACT</h1>
          </div>
        </div>
      </div>
      <div id="TEST-SEPARATOR"></div>
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
                onClick={console.log("Clicked home")}
              >
                HOME
              </h1>
              <h1 id="footer-about-us-button" className="footer-buttons">
                ABOUT US
              </h1>
              <h1 id="footer-newsletter-button" className="footer-buttons">
                NEWSLETTER
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
