import React from 'react';

export default class ComponentThatCanRaiseError extends React.Component<
  {},
  {
    counter: number;
  }
> {
  state = {
    counter: 0
  };

  private raiseError = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState({ counter: 1 });
  };

  public render() {
    if (this.state.counter === 0) {
      return (
        <div>
          <button onClick={this.raiseError}>Raise error!</button>
        </div>
      );
    }
    throw new Error('Il componente si è rotto');
  }
}
