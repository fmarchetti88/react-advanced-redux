import React from 'react';
import './App.css';
import ComponentThatCanRaiseError from './components/ComponentThatCanRaiseError';
import ErrorBoundary from './components/ErrorBoundary';
import TodoListContainer from './components/TodoList';
import Toggle from './components/Toggle';
import ToggleChildren from './components/ToggleChildren';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Toggle
          title="Toggle"
          render={(title: string) => {
            return (
              <div>
                <h2>{title}</h2>
                <TodoListContainer />
              </div>
            );
          }}
        />
        <ToggleChildren>{() => <TodoListContainer />}</ToggleChildren>
        <ComponentThatCanRaiseError />
      </div>
    </ErrorBoundary>
  );
}

export default App;
