import React from 'react'
import { InfoBar, InputMessage, MessageList } from './components'

import * as S from './ChatView.styles'

function ChatView(props) {
  const {
    name,
    room,
    message,
    isSomeoneTyping,
    messageList,
    usersConnected,
    onSetMessage,
    sendMessage,
    onStartTyping,
    onStopTyping,
  } = props

  return (
    <S.ChatViewContainer>
      <S.ChatViewInnerContainer>
        <InfoBar room={room} />
        <MessageList name={name} messageList={messageList} />
        <S.ChatViewConnectedUsers>
          {isSomeoneTyping
            ? 'Someone is typing...'
            : `There is ${usersConnected} user connected`}
        </S.ChatViewConnectedUsers>
        <InputMessage
          message={message}
          setMessage={onSetMessage}
          sendMessage={sendMessage}
          onStartTyping={onStartTyping}
          onStopTyping={onStopTyping}
        />
      </S.ChatViewInnerContainer>
    </S.ChatViewContainer>
  )
}

export default ChatView
