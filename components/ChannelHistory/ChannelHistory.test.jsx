import ChannelHistory from './ChannelHistory';
import ChannelHistoryItem from '../ChannelHistoryItem/ChannelHistoryItem';
import { shallow } from 'enzyme';

describe('ChannelHistory', () => {
  it('renders a ChannelHistoryItem for each item in history array', () => {
    const history = [
      { author: 'Ralph', body: 'hi all' },
      { author: 'Maya', body: 'hello' }
    ];
    const wrapper = shallow(<ChannelHistory history={history} />);
    const items = wrapper.find(ChannelHistoryItem);
    expect(items.length).toEqual(2);
    expect(items.get(0).props).toEqual({ message: history[0] });
    expect(items.get(1).props).toEqual({ message: history[1] });
  });

  it('renders no ChannelHistoryItems if history array is empty', () => {
    const wrapper = shallow(<ChannelHistory history={[]} />);
    const items = wrapper.find(ChannelHistoryItem);
    expect(items.length).toEqual(0);
  });
});
