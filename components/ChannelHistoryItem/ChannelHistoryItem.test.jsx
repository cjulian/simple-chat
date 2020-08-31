import ChannelHistoryItem from './ChannelHistoryItem';
import { shallow } from 'enzyme';

describe('ChannelHistoryItem', () => {
  it('renders a list item containing message author and body', () => {
    const message = { author: 'Ralph', body: 'hi all' };
    const wrapper = shallow(
      <ChannelHistoryItem message={message} />
    );
    const item = wrapper.find('.item');
    const author = wrapper.find('.author');
    const body = wrapper.find('.body');
    expect(item.type()).toEqual('li');
    expect(author.text()).toEqual(message.author);
    expect(body.text()).toEqual(message.body);
  });

  it('renders with class \'you\' when the message is from You', () => {
    const wrapper = shallow(
      <ChannelHistoryItem message={{ author: 'You', body: 'Hi' }} />
    );
    const item = wrapper.find('.item');
    expect(item.hasClass('you')).toEqual(true);
  });
});
