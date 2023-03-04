import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HistorySideBarButton from './HistorySideBarButton';

describe('<HistorySideBarButton />', () => {
  test('it should mount', () => {
    render(<HistorySideBarButton />);
    
    const historySideBarButton = screen.getByTestId('HistorySideBarButton');

    expect(historySideBarButton).toBeInTheDocument();
  });
});