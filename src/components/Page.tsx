import React from 'react';
import withHeaderAndFooter from './HOCWithHeaderAndFooter';

class Page extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <h1>This is the page</h1>
      </div>
    );
  }
}

const EnhancedPage = withHeaderAndFooter(Page);
export default EnhancedPage;