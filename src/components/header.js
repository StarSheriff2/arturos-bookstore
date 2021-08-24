import Navbar from './navbar';
import Login from './login';

const Header = () => (
  <header className="header">
    <h1 className="main-title">Bookstore CMS</h1>
    <Navbar />
    <Login />
  </header>
);

export default Header;
