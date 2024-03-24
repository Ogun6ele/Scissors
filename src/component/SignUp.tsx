import { useState } from "react";

import Apple from "../assets/images/Path.png"
import lines from "../assets/images/Vector 8.png" 
import "../SignUp.css"
import GoogleAuthentication from "./GoogleAuthentication";



const SignUp: React.FC = () => {

  const [userName, setUserName] = useState<string>(" ");
  const [email, setEmail] = useState<string>(" ");

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const confirmPassword = confirmPasswordRef.current!.value;
    const userName = userNameRef.current!.value;

    if (
      email?.trim() === "" ||
      password?.trim() === "" ||
      userName?.trim() === "" ||
      confirmPassword?.trim() === ""
    ) {
      toast.error("Please fill all fields and try again");
      return;
    }

    if (password?.trim() !== confirmPassword?.trim()) {
      toast.error("Passwords must match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        const userData = await getUserData(userCredential.user.uid);
        if (!userData) {
          const userInfo: User = {
            Email: userCredential.user.email,
            Name: userName,
            uuid: userCredential.user.uid,
            photo_url: userCredential.user?.photoURL,
          };
          await storeUserData(userInfo);
          navigate("/dashboard");
        }
      }
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };

  async function getUserData(uuid: string) {
    const response = await fetch(`https://shorts.zictracks.com/api/users?key=${uuid}`);
    if (!response.ok) {
      return false;
    }

    const responseData = await response.json();
    if (!responseData.status) {
      return false;
    }

    return responseData.data;
  }

  async function storeUserData(data: User) {
    const response = await fetch(`https://shorts.zictracks.com/api/users`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return false;
    }

    const responseData = await response.json();
    if (!responseData.status) {
      return false;
    }

    return responseData.data;
  }

  return (
    <div className="signUp-container">
        <form>
            <div className="alternative-signUp">
              <p>Sign up with:</p>
              <div className="google-appleBtn">
                  <GoogleAuthentication />
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
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                id="name"/>

                <input
                type="Email"
                value={email}
                placeholder="Email"
                name="email"
                id="email"
                required/>

                <input
                type="password"
                // onChange={handlePasswordValidation}
                placeholder="Password"
                />

                <input
                type="Password"
                placeholder="Retype Password" />

            </div>
            <p className="password-requirement">6 or more characters, one number, one uppercase & one lower case.</p>
            <button className="signUp-email">Sign up with Email</button>

            <p className="already">
              Already have an account? {" "}
                <span className="blue">Log in</span>
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

export default SignUp