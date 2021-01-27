import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header home link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Mi aerolinea/);
    expect(linkElement).toBeInTheDocument();
});
