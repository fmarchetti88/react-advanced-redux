import React from 'react';
import './App.css';
import CallbackRef from './components/CallbackRef';
import DOMRef from './components/DOMRef';
import SimpleRef from './components/SimpleRef';

export default class AppRefs extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <SimpleRef />
          <DOMRef />
          <CallbackRef />
        </header>
      </div>
    );
  }
}
