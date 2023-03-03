import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SigninButton from './SigninButton';

describe('<SigninButton />', () => {
  test('it should mount', () => {
    render(<SigninButton />);
    
    const signinButton = screen.getByTestId('SigninButton');

    expect(signinButton).toBeInTheDocument();
  });
});