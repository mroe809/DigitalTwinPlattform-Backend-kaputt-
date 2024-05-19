import React, { useEffect  } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getProcessesbyCompanyId, getProcessesForCustomer } from "../slices/processSlice";
import { Link } from 'react-router-dom';
import '../styles/common-styles.css';
import { AccountType } from "../constants";


const ProcessList = () => {
  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  const dispatch = useAppDispatch();
  const { processes, status, error } = useAppSelector((state) => state.dTProcess);

  /*
   * if user is manufacturer, he gets every process for his assigned company, 
   * otherwhise we assume he is a customer and then he gets all of his created processes
   */

  useEffect(() => {
    if (basicUserInfo?.accountType == AccountType.Manufacturer) {
      dispatch(getProcessesbyCompanyId());
    }
    else{
      dispatch(getProcessesForCustomer());
    }
  }, [dispatch]);

  if (status == "loading") return <p>Lade...</p>;
  if (error) return <p>Fehler: {error}</p>;
  if (status == "failed") return <p>Es ist ein unbekannter Fehler aufgetreten</p>;
  
  return (
    <>
        <div className="d-flex justify-content-center align-items-start vh-100">
        <div className="container">
      <h1>Prozessübersicht</h1>
      {processes?.map((process) => (
        <div key={process.processname}>
          <h4>Prozessname: </h4>
          <Link to={"/dtmain"} className="link-style">
            <p>{process.processname}</p>
          </Link>
        </div>
        
      ))}
    </div>
    </div>

    </>
  );
};

export default ProcessList;