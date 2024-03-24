import '../Features.css'
import Line70 from "../assets/images/Line 70.svg"
import Group6 from "../assets/images/Group 6.svg"
import Frame1000001695 from "../assets/images/Frame 1000001695.svg"
import Frame1000001 from "../assets/images/Frame 1000001.svg"
import Frame1000001718 from "../assets/images/Frame 1000001718.svg"

const Features = () => {
  return (
    <section id="features" className="features">
        <div className="features-title">
            <h3><img src={Line70} alt="" />Why choose <span className='blue'>Scissors</span></h3>
            <p>Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none.</p>
        </div>
        <div className="features-list">
            <div className='features-list-top'>
                <div className="feature">
                    <div className="feature-image">
                        <img src={Group6} alt="" />
                    </div>
                    <h4>URL Shortening</h4>
                    <p> Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</p>
                </div>
                <div className="feature">
                    <div className="feature-image">
                        <img src={Frame1000001695} alt=""/>
                    </div>
                    <h4>Custom URLs</h4>
                    <p>With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.</p>
                </div>
            </div>
            <div className='features-list-bottom'>
                <div className="feature">
                    <div className="feature-image">
                        <img src={Frame1000001} alt=""/>
                    </div>
                    <h4>QR Codes</h4>
                    <p>Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</p>
                </div>
                <div className="feature">
                    <div className="feature-image">
                        <img src={Frame1000001718} alt=""/>
                    </div>
                    <h4>Data Analytics</h4>
                    <p> 
                        Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</p>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Features