import { useState } from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom';
import { useAppDispatch } from "../hooks/redux-hooks";
import { login } from "../slices/authSlice";
import {showNotification, NotificationType} from "../slices/notificationSlice";


const Login = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = async () => {
      if (email && password) {
        dispatch(
          login({
            email,
            password,
          })
        );
      } else {
        dispatch(
          showNotification({
            message: "Please provide email and password",
            type: NotificationType.Error,
          })
        );
      }
    };
  
    return (
        <div className='center-container'>
            <div className="login-box">
                <form>
                    <h1>Login</h1>
                    <div className="user-box">
                        <input  
                        placeholder='E-Mail'  
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required    
                        />
                    </div>

                    <div className="user-box">
                        <input 
                        placeholder='Passwort'
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        />
                    </div>
                    <div className="forgot">
                        <a href="#">Passwort vergessen?</a>
                    </div>
                    <Link to="/">
                        <button
                        type="submit" className="buttoncontainer" onClick={handleLogin}> <p>Login</p></button>
                     </Link>
                    
                    <div className="registration">
                        <p>Noch keinen Account? <Link to="/Registration">Account erstellen</Link>.</p>
                    </div>
                </form>
            </div>
        </div>
       
)
}

export default Login