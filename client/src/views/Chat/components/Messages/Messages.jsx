import React, { useMemo } from 'react'
import ReactEmoji from 'react-emoji'

import * as S from './Messages.styles'

function Message({ message, name }) {
  const { user, text } = message

  const isSentByCurrentUser = useMemo(() => {
    return user === name.trim().toLowerCase()
  }, [user])

  return (
    <S.MessageContainer isCurrentUser={isSentByCurrentUser}>
      <S.MessageSentText isCurrentUser={isSentByCurrentUser}>
        {isSentByCurrentUser ? name.trim().toLowerCase() : user}
      </S.MessageSentText>
      <S.MessageBox isCurrentUser={isSentByCurrentUser}>
        <S.MessageText isCurrentUser={isSentByCurrentUser}>
          {ReactEmoji.emojify(text)}
        </S.MessageText>
      </S.MessageBox>
    </S.MessageContainer>
  )
}

function MessageList(props) {
  const { messageList, name } = props

  return (
    <S.MessageList>
      {messageList.map((message, i) => (
        <Message key={`message_${i}`} message={message} name={name} />
      ))}
    </S.MessageList>
  )
}

export { MessageList }
