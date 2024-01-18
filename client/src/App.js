import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/FirstPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PrivateRoutes from "./utils/PrivateRoutes";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
          exact
          path="/"
          element={<Firstpage/>}>
          </Route>
          <Route
          exact
          path="/Signup"
          element={<Signup/>}>
          </Route>
          <Route
          exact
          path="/Signin"
          element={<Signin/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
