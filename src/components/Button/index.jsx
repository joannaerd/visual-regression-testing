import React from 'react';

export const BUTTON_VARIANTS = {
  primary: 'primary',
  secondary: 'secondary',
};

export const Button = ({ variant, onClick = () => {}, children }) => {
  const buttonVariant = BUTTON_VARIANTS[variant];
  const variantClassName = buttonVariant ? ` Button--${buttonVariant}` : '';

  return (
    <button
      onClick={onClick}
      className={`Button${variantClassName}`}
    >
      { children }
    </button>
  )
};
