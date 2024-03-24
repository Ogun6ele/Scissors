import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Engagement from './component/Engagement'
import FAQ from './component/FAQ'
import Features from './component/Features'
import Footer from './component/Footer'
import GetStarted from './component/GetStarted'
import Header from './component/Header'
import HeroSection from './component/HeroSection'
import LogIn from './component/LogIn'
import Pricing from './component/Pricing'
import SignUp from './component/SignUp'
import UrlPaste from './component/UrlPaste'
import "./index.css"

const App = () => {
  return (
    <div>
      <LogIn />
      <Footer />
    </div>
  )
}

export default App