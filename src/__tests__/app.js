import React from 'react';
import App from '../components/App';
import { createRoot } from 'react-dom/client';


it('renders without crashing', () => {
  const root = createRoot(document.getElementById('root')).render(<App />);
});
