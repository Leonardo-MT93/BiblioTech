import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import AppRouter from "./routes/AppRouter"

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
