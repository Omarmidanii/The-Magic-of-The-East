import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { Layout } from "./pages/Layout";
import { SettingPage } from "./pages/SettingPage";
import { Languages } from "./components/SettingPage/Languages";
import CustomerPage from "./pages/CustomerPage";
import ItemsPage from "./pages/ItemsPage";
import GategoryPage from "./pages/GategoryPage";
import EmployerPage from "./pages/EmployerPage";
import ExpensesPage from "./pages/ExpensesPage";
import ReportPage from "./pages/ReportPage";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ChooseBillGroups from "./pages/ChooseBillGroups";
import PrivateRoute from "./services/AuthenticationCheck";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/chooseGroup",
    element: (
      <PrivateRoute>
        <ChooseBillGroups />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "categories",
        element: <GategoryPage />,
      },
      {
        path: "items/:id",
        element: <ItemsPage />,
      },
    ],
  },
  {
    path: "/dash",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <GategoryPage />,
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
        path: "items/:id",
        element: <ItemsPage />,
      },
      {
        path: "employers",
        element: <EmployerPage />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
      },
      {
        path: "reports",
        element: <ReportPage />,
      },
    ],
  },
]);
export default router;
