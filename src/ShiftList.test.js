import React from 'react';
import { render} from '@testing-library/react';
import ShiftList from './components/ShiftList';
import Shift from './components/Shift';



test('renders the shiftList page', () => {
  const { getByText } = render(<ShiftList />);
  const linkElement = getByText(/Here are the latest shift openings for you:/i);
  const greeting = getByText(/morning|afternoon|evening|night/i);
  expect(greeting).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});

