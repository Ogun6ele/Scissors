import underline from "../assets/images/underline.svg"
import backgroundChain from "../assets/images/background-chain.svg"
import chain from "../assets/images/Frame 1000001716.png"
import trapEllipse from "../assets/images/Group 3.png"
import "../HeroSection.css"

const HeroSection = () => {
  return (
    <>
        <section className="hero-sect">
            <h1>Optimize Your Online Experience with Our Advanced <span className="blue">URL Shortening</span> Solution</h1>
            <img src={underline} className="underline" alt="underline"/>
            <p>Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.</p>
            <div className="signUp">
                <button>Sign Up</button>
                <h4><a href="#">Learn more</a></h4>
            </div>

            <div className="chain-container">
                <div className="chain-bg">
                    <img src={backgroundChain} alt="" />
                </div>
                <div className="chain">
                    <img src={chain} alt="" />
                    <h5>Seamlessly transform your long URLs into concise <br/>
                    and shareable links with just few clicks.</h5>
                </div>
                
            </div>
            
        </section>

        <div className="trapezium">
            <img src={trapEllipse} alt="trapezium shape with an ellipse inside of it" />
        </div>
    </>
  )
}

export default HeroSection