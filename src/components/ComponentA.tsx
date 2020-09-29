import React from 'react';

export default class ComponentA extends React.Component<{}, {}> {
  public render() {
    const styles = {
      border: '10px double red',
      backgroundColor: 'lightGray'
    };
    return (
      <div style={styles}>
        <h1>This is the Component A</h1>
      </div>
    );
  }
}
