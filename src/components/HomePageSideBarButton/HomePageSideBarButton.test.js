import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePageSideBarButton from './HomePageSideBarButton';

describe('<HomePageSideBarButton />', () => {
  test('it should mount', () => {
    render(<HomePageSideBarButton />);
    
    const homePageSideBarButton = screen.getByTestId('HomePageSideBarButton');

    expect(homePageSideBarButton).toBeInTheDocument();
  });
});