import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MicrophoneButton from './MicrophoneButton';

describe('<MicrophoneButton />', () => {
  test('it should mount', () => {
    render(<MicrophoneButton />);
    
    const microphoneButton = screen.getByTestId('MicrophoneButton');

    expect(microphoneButton).toBeInTheDocument();
  });
});