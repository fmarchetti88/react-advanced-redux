import React from 'react';
import './App.css';

const AppContext = React.createContext({});

const Green = (props: any) => (
  <AppContext.Consumer>
    {(context: any) => {
      return (
        <div style={{ backgroundColor: 'darkgreen', margin: '10px', padding: '10px', color: 'white' }}>
          <h1>{context.value}</h1>
          <button onClick={context.increment}>Increment</button>
        </div>
      );
    }}
  </AppContext.Consumer>
);

const Blue = (props: any) => (
  <div style={{ backgroundColor: 'navy', margin: '10px', padding: '10px', color: 'white' }}>
    <Green />
  </div>
);

class Red extends React.Component<{}, {}> {
  state = { value: 10, increment: () => this.setState({ value: this.state.value + 1 }) };
  public render() {
    return (
      <AppContext.Provider value={this.state}>
        <div style={{ backgroundColor: 'red', margin: '10px', padding: '10px', color: 'white' }}>
          <div>{this.state.value}</div>
          <Blue />
        </div>
      </AppContext.Provider>
    );
  }
}

export default function AppCtx() {
  return (
    <div className="App">
      <header className="App-header">
        <Red />
        <Green />
      </header>
    </div>
  );
}
