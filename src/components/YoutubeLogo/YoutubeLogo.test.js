import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import YoutubeLogo from './YoutubeLogo';

describe('<YoutubeLogo />', () => {
  test('it should mount', () => {
    render(<YoutubeLogo />);
    
    const youtubeLogo = screen.getByTestId('YoutubeLogo');

    expect(youtubeLogo).toBeInTheDocument();
  });
});