import Google from "../assets/images/logo_googleg_48dp.png"
import Apple from "../assets/images/Path.png"
import lines from "../assets/images/Vector 8.png" 
import "../LogIn.css"

const LogIn = () => {
  return (
    <div className="LogIn-container">
        <form>
            <div className="alternative-LogIn">
                <p>Log in with:</p>
                <div className="google-appleBtn">
                    <button className="google"><img src={Google} alt="google icon" /> Google</button>
                    <button className="apple"><img src={Apple} alt="apple icon" /> Apple</button>
                </div>
                <div className="or">
                <img src={lines} alt="line" />
                <p>Or</p>
                <img src={lines} alt="line" />
                </div>
            </div>

            <div className="input-container">
                <input
                type="text"
                placeholder="Email Address or username"/>
                <input
                type="password"
                placeholder="Password" />
            </div>
            <p className="blue forgot">Forgot your password?</p>

            <button className="signUp-email">Log In</button>

            <p className="already">
              Don't have an account? {" "}
                <span className="blue">Sign Up</span>
            </p>
            
            <div className="agreement-signUp">
              <p>
                <span className="by">By signing up, you agree to <br/></span>
                <span className="privacy-policy">
                  Scissors <strong >Terms of service</strong>,{" "}
                  <strong>Privacy Policy</strong> and{" "}
                  <strong>Acceptable Use Policy</strong>
                </span>
              </p>
            </div>
        </form>
    </div>



  )
}

export default LogIn