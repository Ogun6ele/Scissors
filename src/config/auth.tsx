import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "./firebase";
import { User } from "firebase/auth";

const AuthUserContext = createContext<{
  authUser: User | null;
  isLoading: boolean;
}>({
  authUser: null,
  isLoading: true,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      async (user) => {
        setIsLoading(true);
        user ? setAuthUser(user) : setAuthUser(null);
        setIsLoading(false);
      },
      (error) => {
        console.log("Error", error);

      }
    );
    return () => unsubscribe();
  }, []);


  return {
    authUser,
    isLoading,
  };
}
export const AuthUserProvider: React.FC<{ children: ReactNode }> = (props) => {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>
      {props.children}
    </AuthUserContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthUserContext);
};