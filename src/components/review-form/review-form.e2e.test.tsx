import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {ReviewForm} from './review-form';

configure({adapter: new Adapter()});

const mock = {
  isSending: false,
  sendingError: null,
  id: 1,
  disabled: true,
  formData: {
    rating: 1,
    comment: ``,
  },
};

it(`Form data correctly passes to callback on submit`, () => {
  const {
    isSending,
    sendingError,
    id,
    disabled,
    formData,
  } = mock;
  const onSendForm = jest.fn();
  const onSubmit = jest.fn();
  const onChange = jest.fn();
  const reviewForm = shallow(<ReviewForm
    isSending={isSending}
    sendingError={sendingError}
    id={id}
    disabled={disabled}
    formData={formData}
    onSendForm={onSendForm}
    onSubmit={onSubmit}
    onChange={onChange}
  />);
  const instance = reviewForm.instance();

  instance._formRef = {
    current: {
      reset: jest.fn()
    },
  };

  const preventDefault = jest.fn();
  const form = reviewForm.find(`form`);

  form.simulate(`submit`, {
    preventDefault,
  });

  expect(preventDefault).toHaveBeenCalledTimes(1);
  expect(onSendForm).toHaveBeenCalledWith({id, ...formData});
  expect(onSubmit).toHaveBeenCalled();
  expect(instance._formRef.current.reset).toHaveBeenCalled();
});
