import React from 'react';
import { render } from '@testing-library/react';
import RemoteLanding from '../../remote/src/RemoteLanding';

test('renders RemoteLanding with title', () => {
  const { getByText } = render(<RemoteLanding title="Test Remote" />);
  expect(getByText('Test Remote')).toBeInTheDocument();
  expect(getByText('Welcome to the Remote App Landing Page!')).toBeInTheDocument();
});
