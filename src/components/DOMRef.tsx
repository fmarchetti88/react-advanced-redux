import React, { RefObject } from 'react';

export default class DOMRef extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.firstNameInputRef = React.createRef();
    this.lastNameInputRef = React.createRef();
  }

  firstNameInputRef: RefObject<HTMLInputElement>;
  lastNameInputRef: RefObject<HTMLInputElement>;

  divStyle = {
    border: '10px solid navy',
    backgroundColor: 'white',
    padding: '5px',
    margin: '5px',
    color: 'navy',
    width: '400px'
  };

  private toggle = (focusOnFirstName: boolean) => {
    const first = this.firstNameInputRef.current;
    const last = this.lastNameInputRef.current;

    if (first && last) {
      focusOnFirstName ? first.focus() : last.focus();
    }
  };

  public render() {
    return (
      <div style={this.divStyle}>
        <div>DOM REFs</div>
        <div>
          <input type="text" placeholder="First name" ref={this.firstNameInputRef} />
          &nbsp;|&nbsp;
          <input type="text" placeholder="Last name" ref={this.lastNameInputRef} />
        </div>
        <div>
          <button onClick={() => this.toggle(true)}>Focus on First Name</button>&nbsp;|&nbsp;
          <button onClick={() => this.toggle(false)}>Focus on Last Name</button>
        </div>
      </div>
    );
  }
}
