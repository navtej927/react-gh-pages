import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom'
import App from './App';

test('renders learn react link', () => {
  render(<HashRouter><App /></HashRouter >);
  expect(App).toBeDefined();
});
