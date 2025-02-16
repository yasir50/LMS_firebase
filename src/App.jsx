import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Signup from "./Components/Auth/Signup";
import "./App.css";
import Login from "./Components/Auth/Login";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import AuthRoute from "./Components/Auth/AuthRoute";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Route>
        <Route element={<AuthRoute />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
