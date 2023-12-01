import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/home/Home";
import Women from "./Pages/women/Women";
import Men from "./Pages/men/Men";
import ChildrenSection from "./Pages/children/ChildrenSection";
import All from "./Pages/all/All";
import RootLayout from "./Pages/layout/RootLayout";
import ErrorPage from "./Pages/error/ErrorPage";
import Faq from "./Pages/faq/Faq";
import Contact from "./Pages/contact/Contact";
import ShopLayout from "./Pages/shoplayout/ShopLayout";
import RegisterLayout from "./Pages/layout/RegisterLayout";
import Login from "./Pages/login/Login";
import ForgotPassword from "./Pages/forgot-password/Forgot-Password";
import Registration from "./Pages/registration/Registration";
import AdminLayout from "./Pages/admin-panel/AdminLayout";
import Users from "./Pages/admin-panel/Users";
import Products from "./Pages/admin-panel/Products";
import Orders from "./Pages/admin-panel/Orders";
import Categories from "./Pages/admin-panel/Categories";
import Brands from "./Pages/admin-panel/Brands";
import Colors from "./Pages/admin-panel/Colors";
import Sizes from "./Pages/admin-panel/Sizes";
import Admin from "./Pages/admin-panel/Admin";
import SendCode from "./Pages/send-code/Send-Code";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import ResetPassword from "./Pages/login/ResetPassword";
import { AuthProvider } from "./Context/AuthContext";
import { ThemeProvider } from "./Context/ThemeContext";
import {
  getUserLocal,
  userRole,
} from "./Components/NavigationBar/DropdownMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop/",
        element: <ShopLayout />,
        children: [
          { path: "women", element: <Women /> },
          { path: "men", element: <Men /> },
          { path: "children", element: <ChildrenSection /> },
          { path: "all", element: <All /> },
        ],
      },
      { path: "faq", element: <Faq /> },
      { path: "contact", element: <Contact /> },
      { path: "product-detail/:id", element: <ProductDetail /> },
    ],
  },
  {
    path: "/",
    element: <RegisterLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "registration", element: <Registration /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "send-code", element: <SendCode /> },
      { path: "reset-password", element: <ResetPassword /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Admin />,
      },
      { path: "users", element: <Users /> },
      { path: "products", element: <Products /> },
      { path: "orders", element: <Orders /> },
      { path: "categories", element: <Categories /> },
      { path: "brands", element: <Brands /> },
      { path: "colors", element: <Colors /> },
      { path: "sizes", element: <Sizes /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
