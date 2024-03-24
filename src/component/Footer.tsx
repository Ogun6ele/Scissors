import blackLogo from "../assets/images/black-logo.svg"
import twitterIcon from "../assets/images/i.fi-social-linkedin.svg"
import featherIcon from "../assets/images/svg.feather.svg"
import linkedinIcon from "../assets/images/i.fi-social-linkedin.svg"
import facebookIcon from "../assets/images/i.fi-social-facebook.svg"
import "../Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-logo">
          <img src={blackLogo} alt="logo" className="footer-logo"/>
          <ul className="footer-socials">
            <li><img src={twitterIcon} alt="twitter-icon" className="social-icon"/></li>
            <li><img src={featherIcon} alt="" className="social-icon"/></li>
            <li><img src={linkedinIcon} alt="" className="social-icon"/></li>
            <li><img src={facebookIcon} alt="" className="social-icon"/></li>
          </ul>
        </div>
        <div className="footer-text">
          <div className="footer-cols col-1">
            <div className="col-1A footer-col col-top">
              <h3>Why Scissor ?</h3>
              <ul>
                <li>Scissors 101</li>
                <li>Integrations &amp; API</li>
                <li>Pricing</li>
              </ul>
            </div>

            <div className="col-1B footer-col col-bottom">
              <h3>Resources</h3>
              <ul>
                <li>Blog</li>
                <li>Resource Library</li>
                <li>Developers</li>
                <li>App Connectors</li>
                <li>Support</li>
                <li>Trust Center</li>
                <li>Browser Extension</li>
                <li>Mobile App</li>
              </ul>
            </div>
          </div>
          {/* single link container */}
          <div className="footer-cols col-2">
            <div className="col-2A footer-col col-top">
              <h3>Solutions</h3>
              <ul>
                <li>Social Media</li>
                <li>Digital Marketing</li>
                <li>Customer Service</li>
                <li>For Developers</li>
              </ul>
            </div>
            <div className="col-2B footer-col col-bottom">
              <h3>Features</h3>
              <ul>
                <li>Branded Links</li>
                <li>Mobile Links</li>
                <li>Campaign</li>
                <li>Management &amp; Analytics</li>
                <li>QR Code generation</li>
              </ul>
            </div>
          </div>
          <div className="footer-cols col-3">
            <div className="col-3A footer-col col-top">
              <h3>Products</h3>
              <ul>
                <li>Link Management</li>
                <li>QR Codes</li>
                <li>Link-in-bio</li>
              </ul>
            </div>
            <div className="col-3B footer-col col-bottom">
              <h3>Legal</h3>
              <ul>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Terms of Service</li>
                <li>Acceptable Use Policy</li>
                <li>Code of Conduct</li>
              </ul>
            </div>
          </div>

          <div className="col-4 footer-col col-top">
            <h3>Company</h3>
            <ul>
              <li>About Scissor</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Press</li>
              <li>Contact</li>
              <li>Reviews</li>
            </ul>
          </div>
         
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-end">
          Terms of Service | Security | Scissor
          <span className="footer-date primary-blue-400"> 2023</span>
        </p>
      </div>
    </footer>

  )
}

export default Footer