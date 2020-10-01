import React from 'react';
import './App.css';
import ClassComponent from './components/hooks/ClassComponent';
import FunctionComponent from './components/hooks/FunctionComponent';
import PeopleComponent from './components/hooks/PeopleComponent';

export const AppContext = React.createContext({});

export default function AppHooks() {
  return (
    <AppContext.Provider value={'Filippo'}>
      <div className="App">
        <header className="App-header">
          <ClassComponent />
          <FunctionComponent />
          <PeopleComponent />
        </header>
      </div>
    </AppContext.Provider>
  );
}
