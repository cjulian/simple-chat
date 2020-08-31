import Chat from './Chat';
import ChannelList from '../ChannelList/ChannelList';
import ChannelHistory from '../ChannelHistory/ChannelHistory';
import MessageInput from '../MessageInput/MessageInput';
import { shallow } from 'enzyme';

describe('Chat', () => {
  it('renders a ChannelList, ChannelHistory and a MessageInput', () => {
    const wrapper = shallow(
      <Chat
        getChannels={() => {}}
        getChannelHistory={() => {}}
        sendMessage={() => {}}
      />
    );
    expect(wrapper.find(ChannelList).length).toEqual(1);
    expect(wrapper.find(ChannelHistory).length).toEqual(1);
    expect(wrapper.find(MessageInput).length).toEqual(1);
  });

  it('renders the history of the currently selected channel', () => {});

  it('adds a message to the history of the current channel when user submits a message', () => {});
});
