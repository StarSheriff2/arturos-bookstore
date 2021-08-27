import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/Categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar__links">
        {links.map((link) => (
          <li key={link.id} className="navbar__links__li">
            <NavLink to={link.path} activeClassName="active-link" className="navbar__links__li__link" exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
