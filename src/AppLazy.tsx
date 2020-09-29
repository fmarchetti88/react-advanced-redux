import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';

const ComponentA = React.lazy(() => import('./components/ComponentA'));
const ComponentB = React.lazy(() => import('./components/ComponentB'));

export default function AppLazy() {
  const [compA, setCompA] = useState(false);
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={() => setCompA(!compA)}>Load ComponentA</button>
            {compA && <ComponentA />}
            <ComponentB />
          </header>
        </div>
      </React.Suspense>
    </ErrorBoundary>
  );
}
