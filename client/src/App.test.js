import React from 'react';
import renderer, { act } from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import App from './App';

it('first load renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when submit', () => {
  const component = renderer.create(<App />);
  const submitBtn = component.root.find(el => el.type === 'input' && el.props.type === 'submit');

  act(() => {
    ReactTestUtils.Simulate.click(submitBtn);
  });

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
