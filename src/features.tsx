import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import FeaturesPage from './pages/FeaturesPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FeaturesPage />
  </StrictMode>,
);
