import React, { useState } from 'react';

interface FunctionComponentProps {}

const FunctionComponent = (props: FunctionComponentProps) => {
  const [message, setMessage] = useState('First Message');
  return (
    <div>
      {message}
      <button onClick={() => setMessage('Nuovo messaggio')}>Click Me!</button>
    </div>
  );
};

export default FunctionComponent;
