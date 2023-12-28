import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import io from 'socket.io-client'
import { debounce } from '../../shared'

import ChatView from './ChatView'

let socket
const SOCKET_ENDPOINT =
  process.env.REACT_APP_SOCKET_ENDPOINT || 'localhost:5000'

function Chat() {
  const location = useLocation()
  const history = useHistory()
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [messageState, setMessageState] = useState('')
  const [messagesState, setMessagesState] = useState([])
  const [connectedUsersState, setConnectedUsersState] = useState([])
  const [isSomeoneTypingState, setIsSomeoneTypingState] =
    useState(false)

  useEffect(() => {
    socket = io(SOCKET_ENDPOINT)
    const queryUser = Object.fromEntries([
      ...new URLSearchParams(location.search).entries(),
    ])

    if (!queryUser || !queryUser?.name || !queryUser?.room) {
      history.replace('/')
    }

    setName(queryUser?.name)
    setRoom(queryUser?.room)

    socket.emit('join', queryUser, () => {})

    return () => {
      socket.disconnect()
      socket.off()
    }
  }, [location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessagesState((prevState) => [...prevState, message])
    })
    socket.on('roomData', (usersConnected) => {
      setConnectedUsersState(usersConnected.users)
    })
    socket.on('someoneTyping', (isSomeoneTyping) => {
      setIsSomeoneTypingState((prevState) =>
        prevState !== isSomeoneTyping ? isSomeoneTyping : prevState,
      )
    })
  }, [
    setMessagesState,
    setIsSomeoneTypingState,
    setConnectedUsersState,
  ])

  const onSetMessage = (inputMessage) => {
    socket.emit('startTyping', room.toLowerCase())
    setMessageState(inputMessage)
    debounce(() => {
      socket.emit('finishedTyping', room.toLowerCase())
    }, 400)
  }

  const onSendMessage = () => {
    if (messageState.trim()) {
      socket.emit('sendMessage', messageState, () => {
        setMessageState('')
      })
    }
  }

  return (
    <ChatView
      name={name}
      room={room}
      message={messageState}
      messageList={messagesState}
      usersConnected={connectedUsersState.length}
      isSomeoneTyping={isSomeoneTypingState}
      onSetMessage={onSetMessage}
      sendMessage={onSendMessage}
    />
  )
}

export default Chat
export { Chat }
