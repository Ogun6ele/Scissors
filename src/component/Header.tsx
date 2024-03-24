import Logo from "../assets/images/Logo.svg"
import downArrow from "../assets/images/down-arrow.svg"
import "../Header.css"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
  return (
    <header>
    {/* Nav Bar */}
        <nav>
            <div className="logo">
                <a href="#index.html"><img src={Logo} alt="" /></a>
            </div>
            <ul>
                <li><a href="#My-URLs" className="blue">My URLs</a></li>
                <li><a href="#features">Features <img src={downArrow} alt=""/></a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#analytics">Analytics</a></li>
                <li><a href="#FAQs">FAQs</a></li>
            </ul>
            <div className="btncont-login">    
                <button className="log-in white-btn">Log in</button>
                <button >Try for free</button>
            </div>
        </nav> 
  </header>
  )
}

export default Header