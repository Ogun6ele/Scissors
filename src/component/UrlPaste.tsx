import magicWand from "../assets/images/magic wand.svg"
import "../UrlPaste.css"

const UrlPaste = () => {
  return (
    <section id="My-URLs" className="form">
    <div className="form-center">
        <form action="" className="form-box">
            <input type="text" placeholder="Paste URL here" className="form-url"/>

            <div className="form-type">
                <select name="choose domain" id="choose domain" className="domain-choice">
                    <option value="choose Domain" disabled>Choose Domain</option>
                    <option value="basic">Basic</option>
                    <option value="professional">Professional</option>
                    <option value="teams">Teams</option>
                </select>
    
                <input type="text" placeholder="Type Alias here" className="form-control"/>
            </div>
        </form>
        <div className="trim">
            <button className="trim-button">
                Trim Url <img src={magicWand} alt="magic wand"/>
            </button>
            <p className="form-text">
            By clicking TrimURL, I agree to the
            <strong>Terms of Service, Privacy Policy</strong> and Use of Cookies.
            </p>
        </div>
    </div>
</section>
  )
}

export default UrlPaste