import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../home";
import { Product } from "../product";
import { Service } from "../service";
import { ProductDetail } from "../productDetail";
import Error404 from "../404";
import { SignIn } from "../../admin/Login";
import { Videos } from "../videos";
import { Products } from "../../admin/Products";
import { Company } from "../company";
import { Contact } from "../contact";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error404 />} />
                <Route path={"/"} element={<Home />} />
                <Route path={"/product"} element={<Product />} />
                <Route path={"/productDetail"} element={<ProductDetail />} />
                <Route path={"/service"} element={<Service />} />
                <Route path={"/videos"} element={<Videos />} />
                <Route path={"/company"} element={<Company />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/admin/login"} element={<SignIn />} />
                <Route path={"/admin/products"} element={<Products />} />
            </Routes>
        </BrowserRouter>
    );
}