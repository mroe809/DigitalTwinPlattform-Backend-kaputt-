import React, {useEffect} from 'react';
import './App.css'
import Login from './pages/Login';
import {Routes, Route, Navigate } from 'react-router-dom';
import Registration from './pages/Registration';
import DefaultLayout from './Layouts/DefaultLayout';
import Dashboard_customer from './pages/CustomerDashboard';
import FileList from './slices/s3DownloadSlice';
import FileUploadComponent from './slices/s3UploadSlice';
import UserProfile from './pages/Userprofile';
import UserProfileEdit from './pages/EditProfile';
import ChangePassword from './pages/changepassword';
import ProtectedLayout from "./Layouts/ProtectedLayout";
import NotificationBar from "./components/notification/NotificationBar";
import UserSettings from "./pages/UserSettings";
import { AccountType } from "./constants";
import NotFound from "./pages/NotFound";
import ContactForm from './pages/ContactForm';
import Dashboard_manufacturer from './pages/ManufacturerDashboard';
import Processes from './pages/Processes';
import { useAppSelector } from "./hooks/redux-hooks";
import DTmain from './pages/DTmain';



const App: React.FC = () => {
const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
const accountType = basicUserInfo?.accountType;

  return (
    <>
      <NotificationBar />
      <Routes>
        {accountType === AccountType.Customer && (
          <Route element={
            <ProtectedLayout allowedAccountType={[AccountType.Customer]} />
          }>
            <Route path="/" element={<Navigate to="/Dashboard_customer" />} />
            <Route path="/Dashboard_customer" element={<Dashboard_customer />} />
          </Route>
        )}

        {accountType === AccountType.Manufacturer && (
          <Route element={
            <ProtectedLayout allowedAccountType={[AccountType.Manufacturer]} />
          }>
            <Route path="/" element={<Navigate to="/Dashboard_manufacturer" />} />
            <Route path="/Dashboard_manufacturer" element={<Dashboard_manufacturer />} />

          </Route>
        )}

        <Route element={
          <ProtectedLayout
            allowedAccountType={[
              AccountType.Customer,
              AccountType.Manufacturer,
              AccountType.Admin,
            ]}
          />
        }>
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/userprofile-edit" element={<UserProfileEdit />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="contactform" element={<ContactForm />} />
          <Route path="dtmain" element={<DTmain />} />
          <Route path="/Processes" element={<Processes />} />
        </Route>

        <Route element={<ProtectedLayout allowedAccountType={[AccountType.Manufacturer]} />}>
          <Route path="/user-settings" element={<UserSettings />} />
          <Route path="/Upload" element={<FileUploadComponent />} />
          <Route path="/Download" element={<FileList />} />
        </Route>

        <Route element={<DefaultLayout/>}>
          <Route path="/Registration" element={<Registration />}/>
          <Route path="/Login" element={<Login />}/> 
          <Route path="/" element={<Navigate to="/Login" />} />
        </Route>

      </Routes>
    </>
  );
};

export default App;