import { Routes, Route } from "react-router-dom"
import { Login } from "../pages/login"
import { Home } from "../pages/home"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}