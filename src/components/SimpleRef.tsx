import React, { RefObject } from 'react';

export default class SimpleRef extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.divRef = React.createRef();
  }

  divRef: RefObject<HTMLDivElement>;

  divStyle = {
    border: '10px solid red',
    backgroundColor: 'lightgray',
    padding: '5px',
    margin: '5px',
    color: 'darkred',
    width: '400px'
  };

  private toggle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (this.divRef.current) {
      const { backgroundColor } = this.divRef.current.style;
      this.divRef.current.style.backgroundColor = backgroundColor === 'orange' ? 'lightgray' : 'orange';
    }
  };

  public render() {
    return (
      <div style={this.divStyle} ref={this.divRef}>
        <div>SIMPLE REFs</div>
        <button onClick={this.toggle}>Toggle Style</button>
      </div>
    );
  }
}
