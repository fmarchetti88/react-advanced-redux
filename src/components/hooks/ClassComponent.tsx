import React from 'react';
import { AppContext } from '../../AppHooks';

interface ClassComponentProps {}

class ClassComponentState {
  constructor(public message: string) {}
}

class ClassComponent extends React.Component<ClassComponentProps, ClassComponentState> {
  constructor(props: ClassComponentProps) {
    super(props);
    this.state = new ClassComponentState('First Message');
  }

  componentDidMount() {
    console.log('[ClassComponent] - Component mounted');
  }

  componentWillUnmount() {
    console.log('[ClassComponent] - Component will unmount');
  }

  shouldComponentUpdate(nextProps: ClassComponentProps, nextState: ClassComponentState) {
    console.log(`[ClassComponent] - Component will change - Old: ${this.state.message} - New: ${nextState.message}`);
    return this.state.message !== nextState.message;
  }

  public render() {
    return (
      <AppContext.Consumer>
        {(ctx: any) => {
          return (
            <div style={{ border: '5px dashed darkgreen' }}>
              {this.state.message}
              <button onClick={() => this.setState({ message: 'Nuovo messaggio' })}>Click Me!</button>
              <div>
                <span style={{ backgroundColor: 'green', color: 'white' }}>{ctx}</span>
              </div>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default ClassComponent;
