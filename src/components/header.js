import Navbar from './navbar';
import Login from './login';

const Header = () => {
  const refreshPage = () => window.location.reload();

  return (
    <header className="header">
      <div className="header__sub-container">
        <div className="header__sub-container__navbar-wrapper">
          <h1 className="header__sub-container__logo">
            <button className="header__sub-container__logo__btn" type="button" onClick={refreshPage}>
              Bookstore CMS
            </button>
          </h1>
          <Navbar />
        </div>
        <Login />
      </div>
    </header>
  );
};

export default Header;
