import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../AppHooks';

interface FunctionComponentProps {}

const FunctionComponent = (props: FunctionComponentProps) => {
  const [message, setMessage] = useState('First Message');

  useEffect(() => {
    console.log('[FunctionComponent] - Component mounted');
    return () => console.log('[FunctionComponent] - Component will unmount');
  }, []);

  useEffect(() => {
    console.log(`[FunctionComponent] - Message change (new) ${message}`);
    return () => console.log(`[FunctionComponent] - Message change (old) ${message}`);
  }, [message]);

  const ctx = useContext(AppContext);

  return (
    <div style={{ border: '5px dotted red' }}>
      {message}
      <button onClick={() => setMessage('Nuovo messaggio')}>Click Me!</button>
      <div>
        <span style={{ backgroundColor: 'green', color: 'white' }}>{ctx}</span>
      </div>
    </div>
  );
};

export default FunctionComponent;
