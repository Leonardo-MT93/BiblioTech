

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
        return responseData;
      } catch (error) {
        throw new Error(error.message);
      }
  
    }

    const getBooks = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/book');
        if (!response.ok) {
          throw new Error("Error al obtener los libros");
        }
        const {books} = await response.json();
        console.log(books)
        return books;
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    const getBookForId = async (id) => {
      try {
        const response = await fetch(`http://localhost:9000/api/book/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener el libro");
        }
        const {searchedBook} = await response.json();
        return searchedBook;
      } catch (error) {
        console.error("Error haciendo el fetching de libros:", error);
      }
    };

    const updateBook = async (id, data) => {
      try {
        const response = await fetch(`http://localhost:9000/api/book/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'x-token': token
          },
          body: JSON.stringify(data)
        })

        const responseData = await response.json();
        if (!response.ok) {
          console.log(response)
          throw new Error(responseData.message || 'Credenciales inválidas');
        }
  
        if (responseData.error) {
          throw new Error(responseData.error);
        }
        return responseData;
      } catch (error) {
        throw new Error(error.message);
      }
    }
    
    return {
      createBook,
      getBooks,
      getBookForId,
      updateBook
    };
  }
  
  export default useFetch
  