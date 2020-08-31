import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './MessageInput.module.scss';

function MessageInput ({ sendMessage }) {
  const [message, setMessage] = useState('');

  function handleChange (e) {
    setMessage(e.target.value);
  }

  async function handleSubmit (e) {
    e.preventDefault();
    if (message.trim()) {
      await sendMessage(message);
      setMessage('');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.text} type='text' value={message} onChange={handleChange} />
      <input className={styles.submit} disabled={!message.trim()} type='submit' value='send' />
    </form>
  );
}

MessageInput.propTypes = {
  sendMessage: PropTypes.func.isRequired
};

export default MessageInput;
