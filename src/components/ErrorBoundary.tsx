import React, { ErrorInfo } from 'react';

export interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error: any) {
    console.log(`getDerivedStateFromError - error: ${JSON.stringify(error)}`);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // logging dell'errore...
    console.log(`componentDidCatch - error ${JSON.stringify(error)} - errorInfo ${JSON.stringify(errorInfo)}`);
  }

  public render() {
    // fallback UI
    if (this.state.hasError) {
      return <h1 style={{ color: 'red', background: 'yellow' }}>OOOOPS! Something went wrong....</h1>;
    }
    return this.props.children;
  }
}
