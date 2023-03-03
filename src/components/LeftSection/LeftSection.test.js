import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LeftSection from './LeftSection';

describe('<LeftSection />', () => {
  test('it should mount', () => {
    render(<LeftSection />);
    
    const leftSection = screen.getByTestId('LeftSection');

    expect(leftSection).toBeInTheDocument();
  });
});