import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

import * as S from './Join.styles'

function Join() {
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
            placeholder="Name"
            type="text"
            onChange={nameChange}
          />
        </S.EmptyBox>
        <S.EmptyBox>
          <S.JoinInput
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
      </S.JoinInnerContainer>
    </S.JoinContainer>
  )
}

export default Join
export { Join }
