import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { useAppSelector } from "../hooks/redux-hooks";
import { AccountType } from "../constants";


function Sidebar() {

const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
const accountType = basicUserInfo?.accountType;


let links = [];

if (accountType === AccountType.Manufacturer) {
  links = [
    <Link key="dashboard" to="/" className="menu-item">Dashboard</Link>,
    <Link key="processes" to="/Processes" className="menu-item">Prozesse</Link>,
    <Link key="download" to="/Download" className="menu-item">Downloads</Link>,
  ];
} else if (accountType === AccountType.Customer) {
  links = [
    <Link key="dashboard" to="/" className="menu-item">Dashboard</Link>,
    <Link key="processes" to="/ContactForm" className="menu-item">Neue Anfrage</Link>,
  ];
} else {
  links = [
    <Link key="home" to="/">Dashboard</Link>,
  ];
}

return (
    <Menu>
  <div>
    <ul>
      {links.map(link => (
        <li key={link.key}>{link}</li>
      ))}
    </ul>
  </div>
  </Menu>
);
};


export default Sidebar;