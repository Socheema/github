import React from "react";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className="error-page">
      <h1> oops! Page not found</h1>

      <NavLink to="/">Home</NavLink>
    </div>
  );
}
