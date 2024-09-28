import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { Layout } from "./pages/Layout";
import { SettingPage } from "./pages/SettingPage";
import { Languages } from "./components/SettingPage/Languages";
import CustomerPage from "./pages/CustomerPage";
import ItemsPage from "./pages/ItemsPage";
import GategoryPage from "./pages/GategoryPage";
import EmployerPage from "./pages/EmployerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <ItemsPage />,
      },
      {
        path: "settings",
        element: <SettingPage />,
        children: [{ path: "language", element: <Languages /> }],
      },
      {
        path: "customers",
        element: <CustomerPage />,
      },
      {
        path: "categories",
        element: <GategoryPage />,
      },
      {
        path: "items",
        element: <ItemsPage />,
      },
      {
        path: 'employers',
        element: <EmployerPage />
      }
    ],
  },
]);
export default router;
