import { Navigate } from "react-router-dom";

interface ProtectedRouterProps {
    element : React.ReactNode
}

const ProtectedRoute = ({element} : ProtectedRouterProps) => {
    const token = localStorage.getItem('token');

    return token ? element : <Navigate to="/signin"/>
}

export default ProtectedRoute;