import Navbar from './navbar';
import Login from './login';

const Header = () => (
  <header className="header">
    <div className="header__sub-container">
      <div className="header__sub-container__navbar-wrapper">
        <h1 className="header__sub-container__logo">Bookstore CMS</h1>
        <Navbar />
      </div>
      <Login />
    </div>
  </header>
);

export default Header;
