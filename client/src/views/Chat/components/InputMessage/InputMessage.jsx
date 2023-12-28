import React, { useCallback } from 'react'

import * as S from './InputMessage.styles'

function InputMessage(props) {
  const { message, setMessage, sendMessage } = props

  const onMessage = useCallback(
    (evt) => {
      setMessage?.(evt.target.value)
    },
    [setMessage],
  )

  const onEnterMessage = useCallback(
    (evt) => {
      if (evt.key === 'Enter') {
        evt.preventDefault()
        sendMessage?.()
      }
    },
    [sendMessage],
  )

  const onSendMessage = useCallback(
    (evt) => {
      evt.preventDefault()
      sendMessage?.()
    },
    [sendMessage],
  )

  return (
    <S.InputMessageForm>
      <S.InputMessageInput
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={onMessage}
        onKeyPress={onEnterMessage}
      />
      <S.InputMessageButton type="submit" onClick={onSendMessage}>
        Send
      </S.InputMessageButton>
    </S.InputMessageForm>
  )
}

export default InputMessage
export { InputMessage }
