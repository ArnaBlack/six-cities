import * as React from 'react';
import {Subtract} from 'utility-types';

interface InjectedProps {
  isOpened: boolean,
  onToggleSorting: () => void,
}

interface State {
  isOpened: boolean,
}

const withToggleSorting = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  return class WithSortingOpen extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        isOpened: false,
      };

      this._onToggleSorting = this._onToggleSorting.bind(this);
    }

    render() {
      const {isOpened} = this.state;
      const {props} = this;

      return <Component
        {...props}
        isOpened={isOpened}
        onToggleSorting={this._onToggleSorting}
      />;
    }

    _onToggleSorting() {
      this.setState((prevState) => ({
        isOpened: !prevState.isOpened,
      }));
    }
  }
};

export default withToggleSorting;
