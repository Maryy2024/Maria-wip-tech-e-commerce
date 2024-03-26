import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Store from "../pages/Store/Store";
import Admin from "../pages/Admin/Admin";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Store />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/admin",
            element: <Admin />,
        }
    ]
    )
    return <RouterProvider router={router} />
}
export default Router