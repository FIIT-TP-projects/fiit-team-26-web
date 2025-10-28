import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { AboutPage } from "./components/AboutPage";
import { TeamPage } from "./components/TeamPage";
import { MeetingsPage } from "./components/MeetingsPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/meetings" element={<MeetingsPage />} />
          </Routes>
        </main>
        <footer className="bg-white border-t border-gray-200 py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-500">
              © 2025 Tím 26 — Projekt AI pre právnikov
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
