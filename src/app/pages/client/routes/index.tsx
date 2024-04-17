import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../home";
import { Product } from "../product";
import { Service } from "../service";
import { ProductDetail } from "../productDetail";
import Error404 from "../404";
import { SignIn } from "../../admin/login";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error404 />} />
                <Route path={"/"} element={<Home />} />
                <Route path={"/product"} element={<Product />} />
                <Route path={"/productDetail"} element={<ProductDetail />} />
                <Route path={"/service"} element={<Service />} />
                <Route path={"/admin/login"} element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}