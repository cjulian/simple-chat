import channels from './data/channels';
import channelHistory from './data/channel-history';

export default {
  getChannels: () => channels,
  getChannelHistory: (channelId) => channelHistory.filter((item) => item.channelId === channelId),
  sendMessage: (message, channelId) => {
    channelHistory.push({ channelId: channelId, author: 'You', body: message });
  }
};
