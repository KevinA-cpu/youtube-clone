import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LibrarySideBarButton from './LibrarySideBarButton';

describe('<LibrarySideBarButton />', () => {
  test('it should mount', () => {
    render(<LibrarySideBarButton />);
    
    const librarySideBarButton = screen.getByTestId('LibrarySideBarButton');

    expect(librarySideBarButton).toBeInTheDocument();
  });
});