import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SinglePage from "./Pages/SinglePage";
import Error from "./Pages/Error";
import Header from "./components/ui/Header";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/repo/:id" element={<SinglePage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
