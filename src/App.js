import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Onload from "./components/Onload/Onload";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Blog from "./components/Blog/Blog";
import { useState, useEffect } from "react";


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);
  return (
    <div className="App">
      {
        loading ? <Onload />
          :
          <>
            <Header />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/events" exact element={<Events />} />
              <Route path="/blog" exact element={<Blog />} />
            </Routes>
            <Footer />
          </>
      }
    </div>
  );
}

export default App;
