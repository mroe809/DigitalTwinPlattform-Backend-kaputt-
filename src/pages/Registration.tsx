import { useState } from 'react'
import '../styles/registration.css'
import { Link } from 'react-router-dom';
import { useAppDispatch } from "../hooks/redux-hooks";
import { register } from "../slices/authSlice";
import {showNotification, NotificationType} from "../slices/notificationSlice";


const Registration = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [companyId, setCompanyId] = useState("");

  const handleRegistration = async () => {
    if (name && email && password && accountType) {
      dispatch(
        register({
          name,
          email,
          password,
          accountType,
          companyId,
        })
      );
    } else {
      dispatch(
        showNotification({
          message: "Please fill out all the required fields",
          type: NotificationType.Error,
        })
      );
    }
  };
    return (
<div className='center-container'>
<div className="wrapper">
    <h2>Registrierung</h2>
    <form action="#">
      <div className="input-box">
        <input type="text" 
        placeholder="Name" 
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required/>
      </div>
      <div className="input-box">
        <input type="text" 
        placeholder="E-Mail" 
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required/>
      </div>
      <div className="input-box">
      <select className="custom-dropdown" 
        name="accountType"
        id="accounType"
        value={accountType}
        onChange={(e) => setAccountType(e.target.value)}
        required>
        <option value="" disabled selected>Kontoart auswählen</option>
        <option value="Manufacturer">Hersteller</option>
        <option value="Customer">Kunde</option>
      </select>
      </div>

      <div className="input-box">
      <select className="custom-dropdown" 
        name="company"
        id="company"
        value={companyId}
        onChange={(e) => setCompanyId(e.target.value)}
        >
        <option value="" disabled selected>Unternehmen auswählen</option>
        <option value="6633e4d6e312a4920a10b203">Unternehmen 1</option>
        <option value="6633e4dfe312a4920a10b205">Unternehmen 2</option>
        <option value="123">Unternehmen 3  (existiert nicht)</option>
      </select>
      </div>

      <div className="input-box">
        <input type="password" 
        placeholder="Passwort" 
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required/>
      </div>
      {/* <div className="input-box">
        <input type="password" placeholder="Passwort wiederholen" required/>
      </div> */}
      <div className="input-box button">
        <input type="Submit" value="Registrieren" onClick={handleRegistration}/>
      </div>
      <div className="text">
        <h3>Haben Sie bereits einen Account? <Link to="/Login">Jetzt einloggen</Link> </h3> 
      </div>
    </form>
  </div>
</div>
  
        )
}

export default Registration