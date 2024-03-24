import Line70 from "../assets/images/Line 70.svg"
import checkCircleBlue from "../assets/images/check-circle-blue.svg"
import checkCircle from "../assets/images/check-circle.svg"
import "../Pricing.css"

const Pricing = () => {
  return (
    <section id="pricing">
        <div className="pricing-title">
          <img src={Line70} alt="" />
          <div className="pricing-title-text">
            <h3>A <span style={{color: "#005AE2"}}>price perfect</span> for your needs.</h3>
            
            <p>From catering for your personal, business, event, socials needs, you can be <br/> rest assured we have you in mind in our pricing.</p>
          </div>
        </div>
        <div className="pricing-options">
            <div className="pricing-basic pricing-plan">
                <h3>Basic</h3>
                <div className="pricing-basic-info">
                  <div className="pricing-basic-amt">
                    <h2>Free</h2>
                    <p>Free plan for all users</p>
                  </div>
                  <ul>
                    <li><img src={checkCircleBlue} alt="checked-sign"/>Unlimited URL Shortening</li>
                    <li><img src={checkCircleBlue} alt="checked-sign"/>Basic Link Analytics</li>
                    <li><img src={checkCircleBlue} alt="checked-sign"/>Customizable Short Links</li>
                    <li><img src={checkCircleBlue} alt="checked-sign"/>Standard Support</li>
                    <li><img src={checkCircleBlue} alt="checked-sign"/>Ad-supported</li>
                  </ul>
                </div>
            </div>
            <div className="pricing-professional pricing-plan">
                <h3>Professional</h3>
                <div className="pricing-pro-info">
                  <div className="pricing-pro-amt">
                    <h2>$15/month</h2>
                    <p>Ideal for business creators</p>
                  </div>
                  <ul>
                    <li><img src={checkCircle} alt="checked sign"/>Enhanced Link Analytics</li>
                    <li><img src={checkCircle} alt="checked sign"/>Custom Branded Domains</li>
                    <li><img src={checkCircle} alt="checked sign"/>Advanced Link Customization</li>
                    <li><img src={checkCircle} alt="checked sign"/>Priority Support</li>
                    <li><img src={checkCircle} alt="checked sign"/>Ad-free Experience</li>
                  </ul>
                </div> 
            </div>
            <div className="pricing-teams pricing-plan">
                <h3>Teams</h3>
                <div className="pricing-teams-info">
                  <div className="pricing-teams-amt">
                    <h2>$25/month</h2>
                    <p>Share with up to 10 users</p>
                  </div>
                  <ul>
                    <li><img src={checkCircleBlue} alt="checked-sign"/>Team Collaboration</li>
                    <li><img src={checkCircleBlue} alt="checked-sign"/>User Roles and Permissions</li>
                    <li><img src={checkCircleBlue} alt="checked-sign"/>Enhanced Security</li>
                    <li><img src={checkCircleBlue} alt="checked-sign"/>API Access</li>
                    <li><img src={checkCircleBlue} alt="checked-sign"/>Dedicated Account Manager</li>
                </ul>
              </div>  
            </div>
        </div>
        <div className="pricing-button">
            <button className="custom white-btn">Get Custom Pricing</button>
            <button className="slct-pricing">Select Pricing</button>
        </div>
    </section>
  )
}

export default Pricing