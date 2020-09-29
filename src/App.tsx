import React from 'react';
import './App.css';
import ComponentThatCanRaiseError from './components/ComponentThatCanRaiseError';
import ErrorBoundary from './components/ErrorBoundary';
import TodoListContainer from './components/TodoList';
import Toggle from './components/Toggle';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Toggle render={() => <TodoListContainer />} />
        <ComponentThatCanRaiseError />
      </div>
    </ErrorBoundary>
  );
}

export default App;
