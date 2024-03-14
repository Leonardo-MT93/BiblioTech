

const useFetch = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user? user.token : null;

    const createBook = async(data) => {
      try {
        const response = await fetch('http://localhost:9000/api/book', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-token': token
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
        // if(response.ok){
        //     const {user} = responseData;
            
        // }
        return responseData;
      } catch (error) {
        throw new Error(error.message);
      }
  
    }
    
    return {
      createBook
    };
  }
  
  export default useFetch
  