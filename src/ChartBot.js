import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import config from './Helpers/config'
import ActionProvider from './Helpers/ActionProvider'
import MessageParser from './Helpers/MessageParser'

// .appChatbotContainer_3u5t {
//     border-radius: 5px;
//     bottom: 40px;
//     box-shadow: 5px 5px 13px rgba(91,81,81,.4);
//     display: flex;
//     justify-content: center;
//     margin: 40px 0;
//     position: fixed;
//     right: 40px;
//     z-index: 6;
// }

const ChatbotComponent = () => {
  return (
    <Chatbot
      config={config}
      actionProvider={ActionProvider}
      messageParser={MessageParser}
    />
  )
}

export default ChatbotComponent
