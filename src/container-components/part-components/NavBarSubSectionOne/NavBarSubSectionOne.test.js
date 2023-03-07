import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBarSubSectionOne from './NavBarSubSectionOne';

describe('<NavBarSubSectionOne />', () => {
  test('it should mount', () => {
    render(<NavBarSubSectionOne />);
    
    const navBarSubSectionOne = screen.getByTestId('NavBarSubSectionOne');

    expect(navBarSubSectionOne).toBeInTheDocument();
  });
});