import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../auth/ProtectedRoute";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />
    },
    {
        path: "/signup",
        element: <SignUp />,
        errorElement: <NotFound />
    },
    {
        path: "/signin",
        element: <SignIn />,
        errorElement: <NotFound />
    },
    {
        path: "/dashboard",
        element: ( <ProtectedRoute element={<Dashboard />} />),
        errorElement: <NotFound />
    },
]);

export default Router;