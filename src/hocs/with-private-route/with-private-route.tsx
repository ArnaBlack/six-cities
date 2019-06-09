import * as React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';

interface Props {
  isAuthorizationRequired: boolean,
}

const withPrivateRoute = (Component) => {
  const WithPrivateRoute = (props: Props) => {
    const {isAuthorizationRequired} = props;

    return isAuthorizationRequired
      ? <Redirect to="/login" />
      : <Component
        {...props}
      />;
  };

  const mapStateToProps = (state, props) => ({
    ...props,
    isAuthorizationRequired: getAuthorizationStatus(state),
  });

  return connect(mapStateToProps)(WithPrivateRoute);
};

export default withPrivateRoute;
