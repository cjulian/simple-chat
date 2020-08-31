import MessageInput from './MessageInput';
import { shallow } from 'enzyme';

describe('MessageInput', () => {
  it('renders a text input with submit button', () => {
    const wrapper = shallow(<MessageInput sendMessage={() => {}} />);
    const textInput = wrapper.find('input[type="text"]');
    const submitButton = wrapper.find('input[type="submit"]');
    expect(textInput.length).toEqual(1);
    expect(submitButton.length).toEqual(1);
  });

  it('updates the text input value on change', () => {
    const wrapper = shallow(<MessageInput sendMessage={() => {}} />);
    const textInput = wrapper.find('input[type="text"]');
    expect(textInput.props().value).toEqual('');
    textInput.simulate('change', { target: { value: 'abc xyz' } });
    expect(wrapper.find('input[type="text"]').props().value).toEqual('abc xyz');
  });

  it('calls sendMessage on submit when current message is non-empty', async () => {
    const sendMessage = jest.fn().mockResolvedValue();
    const wrapper = shallow(<MessageInput sendMessage={sendMessage} />);
    const textInput = wrapper.find('input[type="text"]');
    textInput.simulate('change', { target: { value: 'abc xyz' } });
    const form = wrapper.find('form');
    await form.simulate('submit', { preventDefault: () => {} });
    expect(sendMessage).toHaveBeenCalledWith('abc xyz');
  });

  it('does not call sendMessage on submit when current message is empty', async () => {
    const sendMessage = jest.fn().mockResolvedValue();
    const wrapper = shallow(<MessageInput sendMessage={sendMessage} />);
    const textInput = wrapper.find('input[type="text"]');
    textInput.simulate('change', { target: { value: ' ' } });
    const form = wrapper.find('form');
    await form.simulate('submit', { preventDefault: () => {} });
    expect(sendMessage).not.toHaveBeenCalled();
  });

  it('sets the text input value back to empty string after a message is sent', async () => {
    const wrapper = shallow(<MessageInput sendMessage={() => {}} />);
    wrapper.find('input[type="text"]').simulate('change', { target: { value: 'abc xyz' } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    await Promise.resolve();
    expect(wrapper.find('input[type="text"]').props().value).toEqual('');
  });
});
