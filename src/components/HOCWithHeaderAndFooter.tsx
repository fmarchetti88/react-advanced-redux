import React from 'react';

export default function withHeaderAndFooter<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <>
      <header className="App-header-hoc">HEADER (HOC)</header>
      <div className="App-body">
        <Component {...(props as T)} />
      </div>
      <footer className="App-footer">HEADER (FOOTER)</footer>
    </>
  );
}
