import "./DashboardLayout.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FC, useState } from "react";
import { useAuthContext } from "../../context/authContext";
import BookForm from "../../components/BookForm";

interface DashboardLayoutProps {
    children : React.ReactNode
}



const DashboardLayout : FC<DashboardLayoutProps> = ({children}) => {

    const authUser = useAuthContext();

    const [isBookModalOpen, setIsBookModalOpen] = useState(false);

    const openBookModal = () => setIsBookModalOpen(true);
    const closeBookModal = () => setIsBookModalOpen(false)

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
                <button className="add-book" onClick={openBookModal}>
                    Add Book
                </button>
                <button className="add-member">
                    Add Member
                </button>
            </div>
            <div className="container-dashboard-main">
                {children}
            </div>

            {isBookModalOpen && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <BookForm closeBookModal={closeBookModal}/>
                    </div>
                </div>
            )}
        </main>

        <footer>
            <p>&copy; 2024 SSSurendra.co. All rights reserved.</p>
        </footer>
        
        </>
    );
}

export default DashboardLayout;