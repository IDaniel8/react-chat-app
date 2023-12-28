import React, { useMemo } from 'react'
import ReactEmoji from 'react-emoji'

import * as S from './Messages.styles'

function Message({ message, name }) {
  const { user, text } = message

  const isSentByTheAdmin = useMemo(() => {
    return user === 'admin'
  }, [user])

  const isSentByCurrentUser = useMemo(() => {
    return user === name
  }, [user])

  return (
    <S.MessageContainer isCurrentUser={isSentByCurrentUser}>
      {isSentByTheAdmin && (
        <S.MessageAdminSentText>
          <S.AdminMessage
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </S.MessageAdminSentText>
      )}

      {!isSentByTheAdmin && (
        <React.Fragment>
          <S.MessageUserNameText>
            {isSentByCurrentUser ? name : user}
          </S.MessageUserNameText>
          <S.MessageUserSentText isCurrentUser={isSentByCurrentUser}>
            {ReactEmoji.emojify(text)}
          </S.MessageUserSentText>
        </React.Fragment>
      )}
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
