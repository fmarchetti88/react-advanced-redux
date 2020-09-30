import React from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal-root');

interface MyNotificationProps {
  message: string;
  onClose: () => void;
}

interface MyNotificationState {
  visible: boolean;
}

export default class MyNotification extends React.Component<MyNotificationProps, MyNotificationState> {
  constructor(props: MyNotificationProps) {
    super(props);
    this.state = {
      visible: props.message.length > 0
    };
  }

  static getDerivedStateFromProps(newProps: MyNotificationProps, currentState: MyNotificationState) {
    return {
      visible: newProps.message.length > 0
    };
  }

  private handleCloseNotification = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    this.props.onClose();
  };

  private renderComponent = () => {
    const { visible } = this.state;
    const { message } = this.props;
    return (
      visible && (
        <div className="notification-window">
          <div className="notification-header">
            <button onClick={this.handleCloseNotification}>X</button>
          </div>
          <div className="notification-message">{message}</div>
        </div>
      )
    );
  };

  public render() {
    return ReactDOM.createPortal(this.renderComponent(), portalRoot as Element);
  }
}
