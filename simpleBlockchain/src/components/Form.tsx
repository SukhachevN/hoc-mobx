import React, { useState } from 'react';
import { useStore } from '../store';

const Form: React.FC = () => {
  const [message, setMessage] = useState('');

  const store = useStore();

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    store.addTransaction(message);
    setMessage('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='message'
        required
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export { Form };
