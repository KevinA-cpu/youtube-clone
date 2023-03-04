import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RightSection from './RightSection';

describe('<RightSection />', () => {
  test('it should mount', () => {
    render(<RightSection />);
    
    const rightSection = screen.getByTestId('RightSection');

    expect(rightSection).toBeInTheDocument();
  });
});