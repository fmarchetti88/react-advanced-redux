import React from 'react';

interface ClassComponentProps {}

class ClassComponentState {
  constructor(public message: string) {}
}

class ClassComponent extends React.Component<ClassComponentProps, ClassComponentState> {
  constructor(props: ClassComponentProps) {
    super(props);
    this.state = new ClassComponentState('First Message');
  }

  public render() {
    return (
      <div>
        {this.state.message}
        <button onClick={() => this.setState({ message: 'Nuovo messaggio' })}>Click Me!</button>
      </div>
    );
  }
}

export default ClassComponent;
