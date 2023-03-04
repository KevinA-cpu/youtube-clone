import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavigationSideBar from './NavigationSideBar';

describe('<NavigationSideBar />', () => {
  test('it should mount', () => {
    render(<NavigationSideBar />);
    
    const navigationSideBar = screen.getByTestId('NavigationSideBar');

    expect(navigationSideBar).toBeInTheDocument();
  });
});