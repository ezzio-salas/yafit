import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
Sentry.init({
  dsn: "https://a2ae84afee6148159f08f2ac4dbdbbcb@o1409338.ingest.sentry.io/6745523",
  integrations: [new BrowserTracing()], 
  tracesSampleRate: 1.0,
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
