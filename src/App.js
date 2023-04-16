import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Onload from "./components/Onload/Onload";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PreHome from "./components/PreHome/PreHome";
import Events from "./components/Events/Events";
import Blog from "./components/Blog/Blog";
import Login from "./components/manage/Login";
import Signup from "./components/manage/Signup";
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
              <Route path="/" exact element={<PreHome />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/signup" exact element={<Signup />} />
              <Route path="/home" exact element={<Home />} />
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
