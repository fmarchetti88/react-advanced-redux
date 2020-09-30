import React from 'react';

export default class CallbackRef extends React.Component<{}, {}> {
  divRef: HTMLDivElement | null = null;

  divStyle = {
    border: '10px solid darkgreen',
    backgroundColor: 'white',
    padding: '5px',
    margin: '5px',
    color: 'navy',
    width: '400px'
  };

  private toggle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (this.divRef) {
      const { backgroundColor } = this.divRef.style;
      this.divRef.style.backgroundColor = backgroundColor === 'orange' ? 'lightgray' : 'orange';
    }
  };

  callbackRef = (element: HTMLDivElement) => {
    this.divRef = element;
  };

  public render() {
    return (
      <div style={this.divStyle} ref={this.callbackRef}>
        <div>CALLBACK REFs</div>
        <button onClick={this.toggle}>Toggle Style</button>
      </div>
    );
  }
}
