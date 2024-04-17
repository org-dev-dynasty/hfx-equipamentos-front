import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../home";
import { Product } from "../product";
import { Service } from "../service";
import Error404 from "../404";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error404 />} />
                <Route path={"/"} element={<Home />} />
                <Route path={"/product"} element={<Product />} />
                <Route path={"/service"} element={<Service />} />
            </Routes>
        </BrowserRouter>
    );
}