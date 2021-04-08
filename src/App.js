
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';


const App = () => {

  return (
    <ChatEngine
      height="100vh"
      projectID="37993ead-44d2-4e32-b337-0980831eb5fb"
      userName="mubariz"
      userSecret="1234"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};


export default App;