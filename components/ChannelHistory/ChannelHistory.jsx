import PropTypes from 'prop-types';
import ChannelHistoryItem from '../ChannelHistoryItem/ChannelHistoryItem';
import styles from './ChannelHistory.module.scss';

function ChannelHistory ({ history }) {
  return (
    <ul className={styles.history}>
      {
        history.map((message, index) => (
          <ChannelHistoryItem
            key={index}
            message={message}
          />
        ))
      }
    </ul>
  );
}

ChannelHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    body: PropTypes.string
  })).isRequired
};

export default ChannelHistory;
