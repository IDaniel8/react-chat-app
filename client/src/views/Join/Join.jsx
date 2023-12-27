import React, { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useOnlineUser } from '@hooks/index'

import * as S from './Join.styles'

function Join() {
  const isOnlineUser = useOnlineUser()
  const history = useHistory()
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  const nameChange = useCallback(
    (evt) => {
      setName(evt.target.value)
    },
    [setName],
  )

  const roomChange = useCallback(
    (evt) => {
      setRoom(evt.target.value)
    },
    [setRoom],
  )

  const onNavigate = useCallback(() => {
    if (name && room) {
      history.push(`./chat?name=${name}&room=${room}`)
    }
  }, [name, room])

  return (
    <S.JoinContainer>
      <S.JoinInnerContainer>
        <S.JoinHeading>Lets Chat App</S.JoinHeading>
        <S.EmptyBox>
          <S.JoinInput
            disabled={!isOnlineUser}
            placeholder="Name"
            type="text"
            onChange={nameChange}
          />
        </S.EmptyBox>
        <S.EmptyBox>
          <S.JoinInput
            disabled={!isOnlineUser}
            placeholder="Room"
            type="text"
            onChange={roomChange}
          />
        </S.EmptyBox>
        <S.JoinButton onClick={onNavigate} disabled={!name || !room}>
          Sign In
        </S.JoinButton>
        {!isOnlineUser && (
          <S.ErrorMessage>
            You have a poor internet connection, be sure that you have
            internet and try again!...
          </S.ErrorMessage>
        )}
      </S.JoinInnerContainer>
    </S.JoinContainer>
  )
}

export default Join
export { Join }
