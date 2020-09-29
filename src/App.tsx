import React from 'react';
import './App.css';
import ComponentThatCanRaiseError from './components/ComponentThatCanRaiseError';
import ErrorBoundary from './components/ErrorBoundary';
import TodoListContainer from './components/TodoList';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <TodoListContainer />
        <ComponentThatCanRaiseError />
      </div>
    </ErrorBoundary>
  );
}

export default App;
