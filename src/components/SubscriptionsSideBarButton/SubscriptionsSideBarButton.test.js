import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SubscriptionsSideBarButton from './SubscriptionsSideBarButton';

describe('<SubscriptionsSideBarButton />', () => {
  test('it should mount', () => {
    render(<SubscriptionsSideBarButton />);
    
    const subscriptionsSideBarButton = screen.getByTestId('SubscriptionsSideBarButton');

    expect(subscriptionsSideBarButton).toBeInTheDocument();
  });
});