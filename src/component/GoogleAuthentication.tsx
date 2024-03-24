import Google from "../assets/images/logo_googleg_48dp.png"
import { useLocation, useNavigate } from "react-router";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const GoogleAuthentication= () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClickHandler = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        const userData = await getUserData(user.uid);
        if (!userData) {
          const userInfo: User = {
            Email: user.email,
            Name: user.displayName,
            uuid: user.uid,
            photo_url: user?.photoURL,
          };
          await storeUserData(userInfo);
        }
      }
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button className="google"><img src={Google} alt="google icon" />Google</button>
  );
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
export default GoogleAuthentication;