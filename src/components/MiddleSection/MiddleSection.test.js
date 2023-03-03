import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MiddleSection from './MiddleSection';

describe('<MiddleSection />', () => {
  test('it should mount', () => {
    render(<MiddleSection />);
    
    const middleSection = screen.getByTestId('MiddleSection');

    expect(middleSection).toBeInTheDocument();
  });
});