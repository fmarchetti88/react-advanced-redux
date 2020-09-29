import React from 'react';

export interface ToggleProps {
  render: () => {};
}

interface ToggleState {
  visible: boolean;
}

export default class Toggle extends React.Component<ToggleProps, ToggleState> {
  state = { visible: true };

  toggle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    this.setState({ visible: !this.state.visible });
  };

  public render() {
    const { render } = this.props;
    const { visible } = this.state;
    return (
      <div>
        <h2>Section</h2>
        {visible && render()}
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}
