import { Link, Outlet, Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import '../styles/defaultLayout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../components/Sidebar';
import { getUser, logout } from "../slices/authSlice";
import AccessDenied from "../pages/AccessDenied";

type ProtectedLayoutType = {
  allowedAccountType: string[];
};

const ProtectedLayout = ({ allowedAccountType }: ProtectedLayoutType) => {  
  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/login");
  };


  if (
    !basicUserInfo) {
    return <Navigate replace to={"/login"} />;
  }

  
  if (
    !basicUserInfo.accountType ||
    !allowedAccountType.includes(basicUserInfo.accountType)
  ) {
    return <AccessDenied />;
  }


  return (
    <>
    <Sidebar/>
    <Outlet/>
    <div className="userContainer">
        
        <Link to="/userprofile">
            <FontAwesomeIcon icon={faUser} className="Icon" />    
        </Link>
        </div>
    <div className="logoutContainer">
    <a href="#" onClick={handleLogout}>
    <FontAwesomeIcon icon={faArrowRightFromBracket} className="Icon" />
</a>
    </div>
    </>
  );
};

export default ProtectedLayout;