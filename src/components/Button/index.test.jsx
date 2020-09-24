import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button, BUTTON_VARIANTS } from '.';

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

it('has correct classes by default', () => {
    const { getByText } = render(<Button>Good morning.</Button>);
  
    const button = getByText(/good morning/i);

    expect(button.classList).toContain('Button');
});

it('has correct classes in "primary" variant', () => {
    const { getByText } = render(<Button variant={BUTTON_VARIANTS.primary}>Good afternoon.</Button>);
  
    const button = getByText(/good afternoon/i);

    expect(button.classList).toContain('Button');
    expect(button.classList).toContain('Button--primary');
});

it('has correct classes in "secondary" variant', () => {
    const { getByText } = render(<Button variant={BUTTON_VARIANTS.secondary}>Good evening.</Button>);
  
    const button = getByText(/good evening/i);

    expect(button.classList).toContain('Button');
    expect(button.classList).toContain('Button--secondary');
});

it('does not add non-existant modifiers', () => {
    const { getByText } = render(<Button variant="canine">Woof.</Button>);
  
    const button = getByText(/woof/i);

    expect(button.classList).toContain('Button');
    expect(button.classList).not.toContain('Button--canine');
});
