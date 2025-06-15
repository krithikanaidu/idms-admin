import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../src/routes/AppRoutes"
import FlashScreen from "./screens/FlashScreen";
import LoginScreen from "./screens/LoginScreen";
import "./styles/App.css";

const App = () => {
  const [showFlash, setShowFlash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFlash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showFlash ? (
        <FlashScreen />
      ) : !isLoggedIn ? (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <AppRoutes setIsLoggedIn={setIsLoggedIn} />
      )}
    </Router>
  );
};

export default App;
