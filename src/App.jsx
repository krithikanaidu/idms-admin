import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import FlashScreen from "./screens/FlashScreen";
import LoginScreen from "./screens/LoginScreen";
import MainLayout from "./screens/MainLayout";
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
        <MainLayout setIsLoggedIn={setIsLoggedIn} />
      )}
    </Router>
  );
};

export default App;
