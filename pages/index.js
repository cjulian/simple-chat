import Head from 'next/Head';
import apiClient from '../api-client';
import Chat from '../components/Chat/Chat';

export default function Home () {
  return (
    <>
      <Head>
        <title>SimpleChat</title>
      </Head>
      <Chat
        getChannelHistory={apiClient.getChannelHistory}
        getChannels={apiClient.getChannels}
        sendMessage={apiClient.sendMessage}
      />
    </>
  );
}
