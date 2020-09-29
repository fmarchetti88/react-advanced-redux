import React from 'react';

export interface ToggleProps {
  children: () => JSX.Element;
}

interface ToggleState {
  visible: boolean;
}

export default class ToggleChildren extends React.Component<ToggleProps, ToggleState> {
  state = { visible: true };

  toggle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    this.setState({ visible: !this.state.visible });
  };

  public render() {
    const { children } = this.props;
    const { visible } = this.state;
    return (
      <div>
        <h1>Toggle with children</h1>
        {visible && children()}
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}
