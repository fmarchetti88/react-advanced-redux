import React from 'react';
import './App.css';
import withStringData from './components/HOCWithStringData';
import EnhancedPage from './components/Page';

const StringListOne = (p: { items: string[] }) => {
  return (
    <div>
      <h1>Uno</h1>
      <ul>
        {p.items.map((value: string, idx: number) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

const StringListTwo = (p: { items: string[]; title: string }) => {
  return (
    <div>
      <h1>Due</h1>
      <table style={{ border: '3px solid navy' }}>
        <thead>
          <tr>
            <th>{p.title}</th>
          </tr>
        </thead>
        <tbody>
          {p.items.map((value: string, idx: number) => (
            <tr key={idx}>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const WrappedStringListOne = withStringData(StringListOne);
const WrappedStringListTwo = withStringData(StringListTwo);

export default class AppHOC extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <EnhancedPage />
        <WrappedStringListOne />
        <WrappedStringListTwo title="With table" />
      </>
    );
  }
}
