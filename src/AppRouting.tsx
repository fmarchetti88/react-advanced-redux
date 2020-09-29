import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

const ComponentA = React.lazy(() => import('./components/ComponentA'));
const ComponentB = React.lazy(() => import('./components/ComponentB'));

export default function AppRouting() {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <BrowserRouter>
              <Link to="/">Home</Link>
              <Link to="/compb">ComponentB</Link>
              <Switch>
                <Route exact path="/" component={ComponentA} />
                <Route path="/compb" component={ComponentB} />
              </Switch>
            </BrowserRouter>
          </header>
        </div>
      </React.Suspense>
    </ErrorBoundary>
  );
}
