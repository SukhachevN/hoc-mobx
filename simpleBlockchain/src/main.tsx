import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BlockchainStore, StoreProvider } from './store';

import './index.css';

const store = new BlockchainStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
