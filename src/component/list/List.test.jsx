import React from 'react';
import { render } from '@testing-library/react';
import List from './List';

describe('test List component', () => {
  it('render header text', () => {
    const { getByText } = render(
      <List />,
    );
    const header = getByText('What is your plan Today?');
    expect(header).toBeInTheDocument();
  });
});
