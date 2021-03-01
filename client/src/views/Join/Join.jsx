import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useOnlineUser } from '@hooks/index'

import * as S from './Join.styles'

function Join() {
  const isOnlineUser = useOnlineUser()
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

  const onNavigate = (evt) => {
    if (!name || !room) {
      evt.preventDefault()
    }
  }

  return (
    <S.JoinContainer>
      <S.JoinInnerContainer>
        <S.JoinHeading>Join</S.JoinHeading>
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
        <Link
          onClick={onNavigate}
          to={`/chat?name=${name}&room=${room}`}
        >
          <S.JoinButton>Sign In</S.JoinButton>
        </Link>
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
