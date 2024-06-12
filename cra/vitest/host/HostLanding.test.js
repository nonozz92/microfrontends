import React from 'react';
import { render } from '@testing-library/react';
import HostLanding from '../../host/src/HostLanding';

test('renders HostLanding with title', () => {
  const { getByText } = render(<HostLanding title="Test Host" />);
  expect(getByText('Test Host')).toBeInTheDocument();
  expect(getByText('Welcome to the Host App Landing Page!')).toBeInTheDocument();
});
