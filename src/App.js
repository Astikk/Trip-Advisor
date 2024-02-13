import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/navigations/MainNavigation';
import "./App.css";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/places/new" element={<NewPlace />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
      </main>
  </Router>
  );
};

export default App;
