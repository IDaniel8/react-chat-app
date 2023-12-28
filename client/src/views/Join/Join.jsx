import React, { useState, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useOnlineUser } from '@hooks/index'

import * as S from './Join.styles'

function Join() {
  const isOnlineUser = useOnlineUser()
  const history = useHistory()

  const [error, setError] = useState(null)
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
      history.push(
        `./chat?name=${name.trim().toLowerCase()}&room=${room
          .trim()
          .toLowerCase()}`,
      )
    }
  }, [name, room])

  useEffect(() => {
    setError(
      JSON.parse(
        sessionStorage.getItem('__ERRORMESSAGE__') ?? 'null',
      ),
    )
    sessionStorage.removeItem('__ERRORMESSAGE__')
  }, [setError])

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
        {error && <S.ErrorMessage>{error?.message}</S.ErrorMessage>}
      </S.JoinInnerContainer>
    </S.JoinContainer>
  )
}

export default Join
export { Join }
