import "./AuthLayout.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FC } from "react";

interface AuthLayoutProps {
    title: string;
    children: React.ReactNode; // This defines the children prop
    img: string
}

const AuthLayout : FC<AuthLayoutProps> = ({title, children, img}) => {

    return (
        <>
        <header>
            <div className="container-auth-header">
                <div className="container-logo">
                    <img src={Logo} alt="logo" />               
                </div>
                <div className="container-btn-home">
                    <Link to={"/"}><button className="btn home">Home</button></Link>
                </div>
            </div>
        </header>
        
        <main>
            <div className="container-auth-layout">

                <div className="container-auth-box">
                    <div className="container-showcase">
                        <img src={img} alt="side-image" />
                    </div>
                    <div className="container-auth">
                        <h3>{title}</h3>
                        {children}
                    </div>
                </div>

            </div>
        </main>

        <footer>

        </footer>
        </>
    );
}

export default AuthLayout;