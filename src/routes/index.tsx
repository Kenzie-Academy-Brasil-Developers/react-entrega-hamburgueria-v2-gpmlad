import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export function RoutesMain(){
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path="/home" element={<Home/>}/>
      </Route>
      <Route path="*" element={<Navigate to={'/'}/>}/>
    </Routes>
  )
}