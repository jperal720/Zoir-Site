import "./styles.css";

function App() {
  return (
    <div id="body">
      <div id="header-body">
        <div id="header-items">
          <h1 id="title-text">ZOIR-SITE</h1>
          <div id="header-items-right">
            <h1 id="home-text">HOME</h1>
            <h1 id="projects-text">PROJECTS</h1>
            <h1 id="about-us-text">ABOUT US</h1>
            <h1 id="header-contact-text">CONTACT</h1>
          </div>
        </div>
      </div>
      <div id="TEST-SEPARATOR"></div>
      <div id="footer-body">
        <div id="footer-inner-body">
          <h1 id="footer-contact-us-text">CONTACT US</h1>
          <div id="footer-contact-info">
            <div class="footer-division">
              <h1 class="footer-info">zoir@site.ca</h1>
              <h1 class="footer-info">555-555-5555</h1>
              <h1 id="footer-located-in-vancouver">Located in Vancouver</h1>
            </div>
            <div class="footer-division">
              <div id="footer-right-side-links">
                <h1 id="footer-home">HOME</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
