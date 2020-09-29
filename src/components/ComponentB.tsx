import React from 'react';

export default class ComponentB extends React.Component<{}, {}> {
  public render() {
    const styles = {
      border: '10px double green',
      backgroundColor: 'lightGray'
    };
    return (
      <div style={styles}>
        <h1>This is the Component B</h1>
      </div>
    );
  }
}
