import PropTypes from 'prop-types';
import styles from './ChannelHistoryItem.module.scss';
import classNames from 'classnames';

function ChannelHistoryItem ({ message }) {
  return (
    <li
      className={classNames(
        styles.item,
        { [styles.you]: message.author === 'You' }
      )}
    >
      <label className={styles.author}>{message.author}</label>
      <div className={styles.body}>{message.body}</div>
    </li>
  );
}

ChannelHistoryItem.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.string,
    body: PropTypes.string
  }).isRequired
};

export default ChannelHistoryItem;
