import * as React from 'react';
import {Subtract} from 'utility-types';

interface InjectedProps {
  disabled: boolean,
  formData: Review,
  onSubmit: () => void,
  onChange: (evt: any) => void,
}

interface State {
  disabled: boolean,
  formData: Review | object,
}

interface Review {
  id: number,
  rating: number,
  comment: string,
}

const withFormData = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithFormData extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        disabled: true,
        formData: {},
      };

      this._onSubmit = this._onSubmit.bind(this);
      this._onChange = this._onChange.bind(this);
    }

    render() {
      const {
        disabled,
        formData,
      } = this.state;
      const {props} = this;

      return <Component
        {...props}
        disabled={disabled}
        formData={formData}
        onSubmit={this._onSubmit}
        onChange={this._onChange}
      />
    }

    _onSubmit() {
      this.setState({
        disabled: true,
        formData: {},
      });
    }

    _onChange(evt) {
      evt.persist();

      this.setState((prevState) => ({
        disabled: !evt.target.form.checkValidity(),
        formData: {
          ...prevState.formData,
          [evt.target.name]: evt.target.value,
        },
      }));
    }
  }

  return WithFormData;
};

export default withFormData;
