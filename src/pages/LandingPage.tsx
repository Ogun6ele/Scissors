import Engagement from "../component/Engagement"
import FAQ from "../component/FAQ"
import Features from "../component/Features"
import Footer from "../component/Footer"
import GetStarted from "../component/GetStarted"
import Header from "../component/Header"
import HeroSection from "../component/HeroSection"
import Pricing from "../component/Pricing"
import UrlPaste from "../component/UrlPaste"


const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Engagement />
      <Features />
      <Pricing />
      <UrlPaste />
      <FAQ />
      <GetStarted />
      <Footer />
    </>
  )
}

export default LandingPage