import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
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

  return WithActiveItem;
};

export default withActiveItem;
