import PropTypes from 'prop-types';
import ChannelListItem from '../ChannelListItem/ChannelListItem';
import styles from './ChannelList.module.scss';

function ChannelList ({ channels, onClick, selectedChannelId }) {
  return (
    <ul className={styles['channel-list']}>
      {
        channels.map((channel, index) => (
          <ChannelListItem
            channel={channel}
            key={index}
            onClick={onClick}
            selected={channel.id === selectedChannelId}
          />
        ))
      }
    </ul>
  );
}

ChannelList.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  selectedChannelId: PropTypes.number
};

export default ChannelList;
