import Navbar from './navbar';
import Login from './login';

const Header = () => (
  <header className="header">
    <div className="header__sub-container">
      <h1 className="main-title">Bookstore CMS</h1>
      <Navbar />
      <Login />
    </div>
  </header>
);

export default Header;
