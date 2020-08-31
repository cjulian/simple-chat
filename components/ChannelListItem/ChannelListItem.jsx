import PropTypes from 'prop-types';
import styles from './ChannelListItem.module.scss';
import classNames from 'classnames';

function ChannelListItem ({ channel, onClick, selected }) {
  return (
    <li
      className={classNames(
        styles.channel,
        { [styles.selected]: selected }
      )}
      onClick={onClick.bind(null, channel)}
    >
      {channel.name}
    </li>
  );
}

ChannelListItem.propTypes = {
  channel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool
};

export default ChannelListItem;
