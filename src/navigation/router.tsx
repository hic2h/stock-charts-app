import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import MainNavbar from "./navbar";
import SymbolsPage from "@/pages/symbols-page";
import HomePage from "@/pages/home-page";
import AboutPage from "@/pages/about-page";

const NotFound = () => <div>Not Found</div>;


const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <MainNavbar />
      <Outlet />
    </>,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/symbols/:symbol", element: <SymbolsPage /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;