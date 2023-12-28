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

  const fallbackRoute = () => {
    history.replace('/')
  }

  const onSetError = (error) => {
    sessionStorage.setItem('__ERRORMESSAGE__', JSON.stringify(error))
    fallbackRoute()
  }

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

  useEffect(() => {
    socket = io(SOCKET_ENDPOINT)
    const queryUser = Object.fromEntries([
      ...new URLSearchParams(location.search).entries(),
    ])

    setName(queryUser?.name?.trim()?.toLowerCase())
    setRoom(queryUser?.room?.trim()?.toLowerCase())

    socket.emit('join', queryUser, (error) => {
      onSetError(error)
    })

    return () => {
      socket.disconnect()
      socket.off()
    }
  }, [location.search, setName, setRoom])

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
