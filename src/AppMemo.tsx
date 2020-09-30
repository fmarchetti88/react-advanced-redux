import React from 'react';
import './App.css';

const ViewMemo = React.memo((props: { name: string }) => {
  console.log('<ViewMemo> Rendered');
  return <h4>Hello, {props.name}</h4>;
});

interface AppMemoState {
  name: string;
  repetition: number;
}

export default class AppMemo extends React.Component<{}, AppMemoState> {
  names = ['Pietro', 'Paolo', 'Giovanni'];

  state = {
    name: '',
    repetition: 0
  };

  componentDidMount() {
    setInterval(() => {
      const name = this.names[Math.floor(Math.random() * this.names.length)];
      this.setState({ name, repetition: this.state.repetition + 1 });
    }, 1000);
  }

  public render() {
    const { name, repetition } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h4>
            {name} [{repetition}]
            <ViewMemo name={name} />
          </h4>
        </header>
      </div>
    );
  }
}
