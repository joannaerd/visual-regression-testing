import * as React from 'react';

import { Button, BUTTON_VARIANTS } from '.';

export default {
  title: 'Button',
  component: Button,
};

export const Basic = () => (
    <p>
      <Button>Basic Button</Button>
    </p>
);

export const Primary = () => (
  <p>
    <Button variant={BUTTON_VARIANTS.primary}>Primary Button</Button>
  </p>
);

export const Secondary = () => (
  <p>
    <Button variant={BUTTON_VARIANTS.secondary}>Secondary Button</Button>
  </p>
);
