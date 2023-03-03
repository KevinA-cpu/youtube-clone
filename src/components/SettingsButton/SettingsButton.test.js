import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SettingsButton from './SettingsButton';

describe('<SettingsButton />', () => {
  test('it should mount', () => {
    render(<SettingsButton />);
    
    const settingsButton = screen.getByTestId('SettingsButton');

    expect(settingsButton).toBeInTheDocument();
  });
});