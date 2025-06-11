// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import FlashScreen from "./screens/FlashScreen";
import LoginScreen from "./screens/LoginScreen";
import MainLayout from "./screens/MainLayout"; // Import the layout component
import "./styles/App.css";

const App = () => {
  const [showFlash, setShowFlash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFlash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showFlash) {
    return <FlashScreen />;
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Router>
      <MainLayout setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
};

export default App;
