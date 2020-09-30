import React from 'react';
import './App.css';
import MyNotification from './components/MyNotification';

interface AppPortalState {
  inputText: string;
  message: string;
}

export default class AppPortal extends React.Component<{}, AppPortalState> {
  state = { inputText: '', message: '' };

  private handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputText: event.target.value });
  };

  private handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    this.setState({ message: this.state.inputText });
  };

  private handleClose = () => {
    this.setState({ message: '' });
  };

  public render() {
    const { inputText, message } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" value={inputText} onChange={this.handleInput} />
          <button onClick={this.handleClick}>Open Notification</button>
          <MyNotification message={message} onClose={this.handleClose} />
        </header>
      </div>
    );
  }
}
