import 'modern-normalize/modern-normalize.css';
import 'styles/base.scss';

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'App';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App tab='home' />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

// During an update, there's no need to pass the container again.
// root.render(<App tab='profile' />);
