// in MessageParser.jsx

import React from 'react'

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    // this bot will serve as a customer service bot on e-commerce website
    if (message.includes('hello')) {
      actions.handleHello() // Trigger the handleHello action from ActionProvider
    }

    if (message.includes('dog')) {
      actions.handleDog()
    }
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        })
      })}
    </div>
  )
}

export default MessageParser
