import * as React from 'react';

const withPageWrapper = (Component, className) => {
  const WithPageWrapper = (props) => <div className={className}>
    <Component{...props} />
  </div>;

  return WithPageWrapper;
};

export default withPageWrapper;
