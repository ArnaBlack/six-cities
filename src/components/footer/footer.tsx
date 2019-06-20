import * as React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => <footer className="footer container">
  <NavLink
    to="main.html"
    className="footer__logo-link"
  >
    <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
  </NavLink>
</footer>;

export default Footer;
