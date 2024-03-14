import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./auth/context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="absolute top-0  min-h-screen w-full bg-cyan-300">
          <Navbar />
          <div className="p-8">
            <AppRouter />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
