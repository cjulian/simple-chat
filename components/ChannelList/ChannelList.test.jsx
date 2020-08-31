import ChannelList from './ChannelList';
import ChannelListItem from '../ChannelListItem/ChannelListItem';
import { shallow } from 'enzyme';

describe('ChannelList', () => {
  it('renders a ChannelListItem for each item in channels array', () => {
    const channels = [
      { id: 1, name: 'Sports' },
      { id: 2, name: 'Movies' }
    ];
    const onClick = jest.fn();
    const wrapper = shallow(<ChannelList channels={channels} onClick={onClick} />);
    const items = wrapper.find(ChannelListItem);
    expect(items.length).toEqual(2);
    expect(items.get(0).props).toEqual({
      channel: channels[0],
      onClick,
      selected: false
    });
    expect(items.get(1).props).toEqual({
      channel: channels[1],
      onClick,
      selected: false
    });
  });

  it('renders no ChannelListItems if channels array is empty', () => {
    const wrapper = shallow(<ChannelList channels={[]} onClick={() => {}} />);
    const items = wrapper.find(ChannelListItem);
    expect(items.length).toEqual(0);
  });

  it('renders a ChannelListItem as selected if its ID matches the selected channel ID', () => {
    const channels = [
      { id: 1, name: 'Sports' },
      { id: 2, name: 'Movies' }
    ];
    const wrapper = shallow(
      <ChannelList
        channels={channels}
        onClick={() => {}}
        selectedChannelId={2}
      />
    );
    const items = wrapper.find(ChannelListItem);
    expect(items.get(0).props.selected).toEqual(false);
    expect(items.get(1).props.selected).toEqual(true);
  });
});
