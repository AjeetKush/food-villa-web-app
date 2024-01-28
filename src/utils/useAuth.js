import { useState, useEffect } from "react";
import useLocalStorage from "../utils/useLocalStorage";

const useAuth = () => {
  
  const [getLocalStorage] = useLocalStorage("user");

  
  const [isLoggedin, setIsLoggedin] = useState(!!getLocalStorage?.token);

  useEffect(() => {
   
    setIsLoggedin(!!getLocalStorage?.token);
  }, [getLocalStorage]);

  return [isLoggedin, setIsLoggedin];
};

export default useAuth;
