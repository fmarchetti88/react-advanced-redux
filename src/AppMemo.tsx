import React from 'react';
import './App.css';
import { MemoizedMovie, Movie, PureMovie } from './components/Movies';

const ViewMemo = React.memo((props: { name: string }) => {
  console.log('<ViewMemo> Rendered');
  return <div>Hello, {props.name}</div>;
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
            <Movie title="Rambo 13 (Movie)" releaseDate="2020-09-30" isMemoized={false} />
            <MemoizedMovie title="Rambo 13 (MemoMovie)" releaseDate="2020-09-30" isMemoized={true} />
            <PureMovie title="Rambo 13 (Pure)" releaseDate="2020-09-30" isMemoized={false} />
          </h4>
        </header>
      </div>
    );
  }
}
