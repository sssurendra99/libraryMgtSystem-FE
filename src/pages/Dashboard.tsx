import { useEffect, useState } from "react";
import BooksList from "../components/BooksList";
import DashboardLayout from "../layouts/app-layouts/DashboardLayout";
import { AuthUser, AuthContext} from "../context/authContext"
import { jwtDecode, JwtPayload } from "jwt-decode";
import BookForm from "../components/BookForm";

interface CustomJwtPayload extends JwtPayload {
    role: string
}

function Dashboard(){

    const [authUser, setAuthUser] = useState<AuthUser>({
        username: '',
        role: '',
    });

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            try{
                const decodedToken : CustomJwtPayload = jwtDecode(token);
                setAuthUser({
                    username: decodedToken.sub,
                    role: decodedToken.role,
                })

                console.log(decodedToken.role)
            } catch(error){
                console.error("Error message: ", error)
            }
        }
    },[]);

    return(
        <AuthContext.Provider value={authUser} >
            <DashboardLayout>
                <div className="container-middle-box">
                    <BooksList />
                    <BookForm/>
                </div>
            </DashboardLayout>
        </AuthContext.Provider>
    );
}

export default Dashboard;