import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '.';

it('renders the content', () => {
  const { getByText } = render(<Button>Hi!</Button>);

  const content = getByText(/hi/i);

  expect(content).toBeInTheDocument();
});

it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Hello...</Button>);
  
    const button = getByText(/hello/i);
    userEvent.click(button);

    expect(onClick).toHaveBeenCalled();
});
