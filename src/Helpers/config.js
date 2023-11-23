// in config.js
import { createChatBotMessage, createCustomMessage } from 'react-chatbot-kit'
import DogPicture from '../Widgets/DogPicture'
import CustomMessage from '../Widgets/CustomMessage'

const botName = 'Nobert'

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}. I’m here to help you explain how I work.`
    ),
    createChatBotMessage(
      "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
      {
        withAvatar: false,
        delay: 500,
      }
    ),
    createCustomMessage('Test', 'custom'),
  ],
  state: {
    gist: '',
    infoBox: '',
  },
  customComponents: {},
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
  },
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
}

export default config
