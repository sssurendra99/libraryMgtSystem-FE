import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/app-layouts/DashboardLayout";
import { AuthUser, AuthContext } from "../context/authContext";
import { jwtDecode, JwtPayload } from "jwt-decode";
import DashboardTables from "../components/DashboardTables";
import { MemberType } from "../types/MemberResponse";

interface CustomJwtPayload extends JwtPayload {
  role: string;
}

function Dashboard() {
  const [authUser, setAuthUser] = useState<AuthUser>({
    username: "",
    role: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken: CustomJwtPayload = jwtDecode(token);
        setAuthUser({
          username: decodedToken.sub,
          role: decodedToken.role,
        });

        console.log(decodedToken.role);
      } catch (error) {
        console.error("Error message: ", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={authUser}>
      <DashboardLayout>
        <div className="container-middle-box">
          {authUser.role === MemberType.Admin ? (
            <DashboardTables />
          ) : (
            <DashboardTables />
          )}
        </div>
      </DashboardLayout>
    </AuthContext.Provider>
  );
}

export default Dashboard;
