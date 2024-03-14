import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";


const useLogin = () => {
      const {login} = useContext(AuthContext);
    const handleLogin = async(data) => {
      try {
        const response = await fetch('http://localhost:9000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message || 'Credenciales inválidas');
        }
  
        if (responseData.error) {
          throw new Error(responseData.error);
        }
        if(response.ok){
            const {user} = responseData;
            const {token} = responseData;
            login(user._id, user.name, user.email, token);
        }
        return responseData;
      } catch (error) {
        throw new Error(error.message);
      }
  
    }
    
    return {
      handleLogin
    };
  }
  
  export default useLogin
  