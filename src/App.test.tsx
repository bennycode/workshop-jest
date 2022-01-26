import React from 'react';
import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  describe('Presentation Layer', () => {
    it('shows the title', () => {
      render(<App/>);
      const title = screen.getByText(/counter/i);
      expect(title).toBeInTheDocument();
    });

    it('counts up when clicking the "+" button', () => {
      render(<App/>);
      const plusButton = screen.getByRole('button', {name: '+'});
      user.click(plusButton);
      const counter = screen.getByTestId('counter');
      expect(counter.textContent).toBe('2');
    });
  });
});
