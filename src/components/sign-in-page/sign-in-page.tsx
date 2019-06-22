import * as React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import withFormData from '../../hocs/with-formdata/with-formdata';
import Sprite from '../sprite/sprite';
import Header from '../header/header';

import {getCurrentCity} from '../../store/city/selectors';
import UserOperation from '../../store/user/operation/operation';

import {City} from '../../types';

interface Props {
  disabled: boolean,
  currentCity: City,
  formData: FormData,
  onLogin: (obj: FormData) => void,
  onSubmit: () => void,
  onChange: (evt: any) => void,
}

interface FormData {
  email: FormDataEntryValue,
  password: FormDataEntryValue
}

class SignInPage extends React.PureComponent<Props, null> {
  private _formRef: React.RefObject<HTMLFormElement>;

  constructor(props) {
    super(props);

    this._formRef = React.createRef();

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  render() {
    const {
      disabled,
      currentCity,
      onChange,
    } = this.props;

    return <div className="page page--gray page--login">
      <Header />
      <Sprite />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={this._handleFormSubmit}
              onChange={onChange}
              ref={this._formRef}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={disabled}
              >Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <NavLink
                className="locations__item-link"
                to="/"
              >
                <span>{currentCity.name}</span>
              </NavLink>
            </div>
          </section>
        </div>
      </main>
    </div>
  }

  componentDidMount() {
    document.title = `6 cities: authorization`;
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const {
      formData,
      onLogin,
      onSubmit,
    } = this.props;

    onLogin(formData);
    onSubmit();
    this._formRef.current.reset();
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
  currentCity: getCurrentCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (userData) => dispatch(UserOperation.login(userData)),
});

export {SignInPage};
export default withFormData(connect(mapStateToProps, mapDispatchToProps)(SignInPage));
