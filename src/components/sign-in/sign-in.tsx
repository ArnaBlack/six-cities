import * as React from 'react';
import {connect} from 'react-redux';

import Sprite from '../sprite/sprite';
import Header from '../header/header';

import {getCurrentCity} from '../../store/data/selectors';
import UserOperation from '../../store/user/operation/operation';

import {City} from '../../types';

interface Props {
  currentCity: City,
  onLogin: (obj: userData) => void,
}

interface userData {
  email: FormDataEntryValue,
  password: FormDataEntryValue
}

class SignIn extends React.PureComponent<Props, null> {
  constructor(props) {
    super(props);

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  render() {
    const {currentCity} = this.props;

    return <React.Fragment>
      <Header />
      <Sprite />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={this._handleFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{currentCity.name}</span>
              </a>
            </div>
          </section>
        </div>
      </main>;
    </React.Fragment>
  }

  componentDidMount() {
    document.title = `6 cities: authorization`;
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const {onLogin} = this.props;
    const data = new FormData(evt.target);
    const email = data.get(`email`);
    const password = data.get(`password`);
    onLogin({email, password});
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
  currentCity: getCurrentCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (userData) => dispatch(UserOperation.login(userData)),
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
