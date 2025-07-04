import react from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoutes from "./components/ProtectedRoute"

function Logout(){
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegsiterAndLogout() {
  localStorage.clear()
  return <Register />
}


function App() {
   return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegsiterAndLogout />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
