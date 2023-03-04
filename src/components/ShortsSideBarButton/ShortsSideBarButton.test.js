import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShortsSideBarButton from './ShortsSideBarButton';

describe('<ShortsSideBarButton />', () => {
  test('it should mount', () => {
    render(<ShortsSideBarButton />);
    
    const shortsSideBarButton = screen.getByTestId('ShortsSideBarButton');

    expect(shortsSideBarButton).toBeInTheDocument();
  });
});