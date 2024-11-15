import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import ComplaintViaturaCirculacao from "./routes/ComplaintViaturaCirculacao";
import ComplaintRegister from "./routes/ComplaintRegister";
import Complaint from "./routes/Complaint";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="home" element={<Home/>} />
            <Route path="viaturas" element={<ComplaintViaturaCirculacao/>}/>
            <Route path="newcomplaint" element={<ComplaintRegister/>}/>
            <Route path="denuncia" element={<Complaint/>}/>
        </Routes>
    )
}
