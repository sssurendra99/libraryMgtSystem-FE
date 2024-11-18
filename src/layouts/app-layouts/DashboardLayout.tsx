import "./DashboardLayout.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FC } from "react";
import { useAuthContext } from "../../context/authContext";

interface DashboardLayoutProps {
    children : React.ReactNode
}



const DashboardLayout : FC<DashboardLayoutProps> = ({children}) => {

    const authUser = useAuthContext();

    return (
        <>
        <header>
            <div className="container-dashboard-header">
                <div className="container-logo">
                    <img src={Logo} alt="logo" />
                    <h3>Hi, {authUser.username}</h3>
                </div>
                <div className="container-btn-home">
                    <Link to={"/"}><button className="btn home">Home</button></Link>
                </div>
            </div>
        </header>
        
        <main>
            <div className="container-operations">
                <button className="add-book">
                    Add Book
                </button>
                <button className="add-member">
                    Add Member
                </button>
            </div>
            <div className="container-dashboard-main">
                {children}
            </div>
        </main>

        <footer>
            <p>&copy; 2024 SSSurendra.co. All rights reserved.</p>
        </footer>
        </>
    );
}

export default DashboardLayout;