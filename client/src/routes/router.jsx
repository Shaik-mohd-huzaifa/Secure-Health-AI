import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../components/Dashboard/Dashboard.component";
import App from "../App";
import AuthCallback from "../components/AuthCallback/AuthCallback.component";

const NotFound = () => <div>404 - Page Not Found</div>;

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound />,  // Use custom NotFound component here
    },
    {
        path: "dashboard",
        element: <Dashboard/>,  // Replace with <Dashboard /> if desired
    },
    {
        path: "auth/callback",
        element: <AuthCallback/>
    }
]);
