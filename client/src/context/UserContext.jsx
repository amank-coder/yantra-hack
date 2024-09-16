import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserContextProvider = ({children})=>{
    const [user, setUser] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(false);

    async function loginUser(email, password, navigate){
        setLoading(true);
        try{
            console.log(email);
            console.log(password);
            const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/login`,{email, password})
            alert("Login successful!")
            localStorage.setItem("token",data.token)
            setUser(data.user);
            setLoading(false);
            setIsAuth(true);
            localStorage.setItem("user",user)
            navigate('/')
        }catch(error){
            console.log(error)
        }
    }

    async function registerUser(name, email, password, navigate) {
        setLoading(true);
        try {
          const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/register`, {
            name,
            email,
            password,
          });
    
          localStorage.setItem("activationToken", data.activationToken);
          setLoading(false);
          navigate("/verify");
        } catch (error) {
          setLoading(false);
          console.log(error)
        }
      }

      async function verifyOtp(otp, navigate) {
        setBtnLoading(true);
        const activationToken = localStorage.getItem("activationToken");
        try {
          const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/verify`, {
            otp,
            activationToken,
          });
    
          navigate("/login");
          localStorage.clear();
          setLoading(false);
        } catch (error) {
          console.log(error)
          setLoading(false);
        }
      }

    async function fetchUser() {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/myprofile`, {
              headers: {
                token: localStorage.getItem("token"),
              },
            });
            console.log("data",data)
            setIsAuth(true);
            setUser(data.user);
            setLoading(false);
            console.log("user",user)
            localStorage.setItem("user",user)
          } catch (error) {
            console.log(error);
            setLoading(false);
          }
    }
    useEffect(() => {
        fetchUser();
        console.log(isAuth)
      }, []);

    return <UserContext.Provider value={{user, setUser, isAuth, setIsAuth, loginUser, loading, registerUser, verifyOtp}}>{children}</UserContext.Provider>
}

export const UserData = () => useContext(UserContext);