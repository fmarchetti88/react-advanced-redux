import React from 'react';

interface MovieProps {
  title: string;
  releaseDate: string;
  isMemoized: boolean;
}

export function Movie(props: MovieProps) {
  console.log(`${props.isMemoized ? '<MemoizedMovie>' : '<Movie>'} Rendered`);
  return (
    <div>
      <div>Title: {props.title}</div>
      <div>Release Date: {props.releaseDate}</div>
    </div>
  );
}

export const MemoizedMovie = React.memo(Movie);

export class PureMovie extends React.PureComponent<MovieProps> {
  public render() {
    console.log(`<PureMovie> Rendered`);
    return (
      <div>
        <div>Title: {this.props.title}</div>
        <div>Release Date: {this.props.releaseDate}</div>
      </div>
    );
  }
}
