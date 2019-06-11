import * as React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import {getUser} from '../../store/user/selectors';

import {User} from '../../types';

const BASE_URL = `https://es31-server.appspot.com/six-cities`;

interface Props {
  user: User,
}

const Header = (props: Props) => {
  const {user} = props;

  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <NavLink
            to="/"
            className="header__logo-link header__logo-link--active"
          >
            <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </NavLink>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <NavLink className="header__nav-link header__nav-link--profile" to={user ? `/favorites` : `/login`}>
                {user ? <div
                  className="header__avatar-wrapper user__avatar-wrapper"
                  style={{backgroundImage: `url("${BASE_URL}${user.avatarUrl}")`}}
                >
                </div> : null}
                <span className="header__user-name user__name">{user ? user.email : `Sign In`}</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;
};

const mapStateToProps = (state, props) => ({
  ...props,
  user: getUser(state),
});

export {Header};
export default connect(mapStateToProps)(Header);
