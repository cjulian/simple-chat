import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ChannelList from '../ChannelList/ChannelList';
import ChannelHistory from '../ChannelHistory/ChannelHistory';
import MessageInput from '../MessageInput/MessageInput';
import styles from './Chat.module.scss';

function Chat ({ getChannels, getChannelHistory, sendMessage }) {
  const [channels, setChannels] = useState([]);
  const [channel, setChannel] = useState(null);
  const [history, setHistory] = useState([]);

  const updateHistory = async () => {
    if (channel) {
      const history = await getChannelHistory(channel.id);
      setHistory(history);
    }
  };

  const send = async (message) => {
    await sendMessage(message, channel.id);
    await updateHistory();
  };

  useEffect(() => {
    (async () => {
      const fetchedChannels = await getChannels();
      setChannels(fetchedChannels);
      setChannel(fetchedChannels[0]);
    })();
  }, []);

  useEffect(() => { updateHistory(); }, [channel]);

  return (
    <div className={styles.chat}>
      <div className={styles.channels}>
        <ChannelList
          channels={channels}
          onClick={setChannel}
          selectedChannelId={channel && channel.id}
        />
      </div>
      <div className={styles.messages}>
        <div className={styles.scrollable}>
          <ChannelHistory history={history} />
        </div>
        <MessageInput sendMessage={send} />
      </div>
    </div>
  );
}

Chat.propTypes = {
  getChannelHistory: PropTypes.func.isRequired,
  getChannels: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired
};

export default Chat;
