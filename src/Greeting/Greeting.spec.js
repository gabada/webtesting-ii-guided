import React from 'react';
import { render } from 'react-testing-library';

import Greeting from './Greeting';

describe('<Greeting />', () => {
  it('renders No Message if no message provided', () => {
    const { getByText } = render(<Greeting />);
    getByText(/no message/i);
  });
  it('renders the provded message', () => {
    const { getByText } = render(<Greeting msg='Hello Team' />);
    getByText(/hello team/i);
  });
});
