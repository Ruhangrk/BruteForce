import "./App.css";
import Header from "./components/Header/Header";
import NoHeader from "./components/Header/NoHeader";
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
import MyProfile from "./components/profile/MyProfile"
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={
            loading ? (
              <Onload />
            ) : (
              <>
                <NoHeader />
                <PreHome />
              </>
            )
          }
        ></Route>

        <Route
          path="/login"
          exact
          element={
            <>
              <NoHeader />
              <Login />
            </>
          }
        />
        <Route
          path="/signup"
          exact
          element={
            <>
              <NoHeader />
              <Signup />
            </>
          }
        />
        <Route
          path="/home"
          exact
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/events"
          exact
          element={
            <>
              <Header />
              <Events />
            </>
          }
        />
        <Route
          path="/blog"
          exact
          element={
            <>
              <Header />
              <Blog />
            </>
          }
        />
        <Route
          path="/profile"
          exact
          element={
            <>
              <Header />
              <MyProfile />
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
