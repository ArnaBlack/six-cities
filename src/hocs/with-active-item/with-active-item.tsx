import * as React from 'react';
import {Subtract} from 'utility-types';

import {Offer} from '../../types';

interface State {
  activeItem: Offer | string,
}

interface InjectedProps {
  onSelectItem: (activeItem: Offer | string) => void
}

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  return class WithActiveItem extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null,
      };

      this._onSelectItem = this._onSelectItem.bind(this);
    }

    render() {
      const {activeItem} = this.state;
      const {props} = this;

      return <Component
        {...props}
        activeItem={activeItem}
        onSelectItem={this._onSelectItem}
      />;
    }

    _onSelectItem(activeItem) {
      this.setState({activeItem});
    }
  }
};

export default withActiveItem;
