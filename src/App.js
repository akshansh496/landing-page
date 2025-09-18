import React from "react";
import { Routes, Route } from "react-router-dom";
import SportAILanding from "./components/SportAILanding";
import LoginPage from "./LoginPage";
import PlayerSignup from "./PlayerSignup";
import CoachSignup from "./CoachSignup";
import PlayerLogin from "./Player-Interface/App";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SportAILanding />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<PlayerSignup />} />
      <Route path="/coach-signup" element={<CoachSignup />} />
      <Route path="/PlayerLogin" element={<PlayerLogin />} />
    </Routes>
  );
}
