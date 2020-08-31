import ChannelListItem from './ChannelListItem';
import { shallow } from 'enzyme';

describe('ChannelListItem', () => {
  const channel = { id: 1, name: 'Channel Name' };
  const onClick = jest.fn();

  beforeEach(() => { onClick.mockReset(); });

  it('renders a list item containing the channel name', () => {
    const wrapper = shallow(
      <ChannelListItem
        onClick={onClick}
        channel={channel}
      />
    );
    const item = wrapper.find('.channel');
    expect(item.type()).toEqual('li');
    expect(item.text()).toEqual('Channel Name');
  });

  it('renders with selected class when the channel is selected', () => {
    const wrapper = shallow(
      <ChannelListItem
        onClick={onClick}
        channel={channel}
        selected
      />
    );
    const item = wrapper.find('.channel');
    expect(item.hasClass('selected')).toEqual(true);
  });

  it('calls onClick with channel when clicked', () => {
    const wrapper = shallow(
      <ChannelListItem
        onClick={onClick}
        channel={channel}
      />
    );
    const item = wrapper.find('.channel');
    item.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(channel);
  });
});
