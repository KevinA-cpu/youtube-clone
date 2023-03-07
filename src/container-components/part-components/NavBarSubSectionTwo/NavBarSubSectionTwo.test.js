import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBarSubSectionTwo from './NavBarSubSectionTwo';

describe('<NavBarSubSectionTwo />', () => {
  test('it should mount', () => {
    render(<NavBarSubSectionTwo />);
    
    const navBarSubSectionTwo = screen.getByTestId('NavBarSubSectionTwo');

    expect(navBarSubSectionTwo).toBeInTheDocument();
  });
});