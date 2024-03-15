

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
          throw new Error(responseData.message || 'Error en la respuesta');
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
          throw new Error(responseData.message || 'Error en la respuesta');
        }
  
        if (responseData.error) {
          throw new Error(responseData.error);
        }
        return responseData;
      } catch (error) {
        throw new Error(error.message);
      }
    }

    const deleteBook = async (id) => {
      try {
        const response = await fetch(`http://localhost:9000/api/book/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'x-token': token
          }
        })

        const responseData = await response.json();
        if (!response.ok) {
          console.log(response)
          throw new Error(responseData.message || 'Error en la respuesta');
        }
  
        if (responseData.error) {
          throw new Error(responseData.error);
        }
        return responseData;
      } catch (error) {
        throw new Error(error.message);
      }
    }
    
    const addFavorite = async (id, bookId) => {
      try {
        const response = await fetch(`http://localhost:9000/api/favorites/add/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-token': token
          },
          body: JSON.stringify({bookId})
        })

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message || 'Algo salió mal al agregar el libro a favoritos');
        }
  
        if (responseData.error) {
          throw new Error(responseData.error);
        }
        return responseData;
      } catch (error) {
        throw new Error(error.message);
      }
    
    }

    const removeFavorite = async (id, bookId) => {

      try {
        const response = await fetch(`http://localhost:9000/api/favorites/remove/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'x-token': token
          },
          body: JSON.stringify({bookId})
        })

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message || 'Algo salió mal al agregar el libro a favoritos');
        }
  
        if (responseData.error) {
          throw new Error(responseData.error);
        }
        return responseData;
      } catch (error) {
        throw new Error(error.message);
      }

    }

    const getFavorites = async (id) => {
      try {
        const response = await fetch(`http://localhost:9000/api/favorites/list/${id}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-token': token
          }
        });
        if (!response.ok) {
          throw new Error("Error al obtener los libros favoritos");
        }
        const {favoritesBooks}= await response.json();
        return favoritesBooks;
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    return {
      createBook,
      getBooks,
      getBookForId,
      updateBook,
      addFavorite,
      removeFavorite,
      getFavorites,
      deleteBook
    };
  }
  
  export default useFetch
  