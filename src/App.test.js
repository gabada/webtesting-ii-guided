import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library'; // <<<<<<<<<<<<<<<<<<<<<<<<<<
import 'jest-dom/extend-expect'; // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders successfully', () => {
    render(<App />);
  });

  it('renders Hello World', () => {
    const { getByText, queryByText, debug } = render(<App />);

    // debug();

    getByText(/hello world/i);
    expect(queryByText(/hello world/i)).not.toBeNull();
  });

  it('greets the team', () => {
    const { getByText } = render(<App />);
    const greetButton = getByText(/greet/i);
    fireEvent.click(greetButton);
    getByText(/hello web xvii/i);
  });
  it('says bye to the team', () => {
    const { getByText } = render(<App />);
    const byeButton = getByText(/bye/i);
    fireEvent.click(byeButton);
    getByText(/bye web xvii/i);
  });
});
