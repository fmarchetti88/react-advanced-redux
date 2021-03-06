import React from 'react';

export interface ToggleProps {
  title: string;
  render: (title: string) => {};
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
    const { render, title } = this.props;
    const { visible } = this.state;
    return (
      <div>
        {visible && render(title)}
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}
