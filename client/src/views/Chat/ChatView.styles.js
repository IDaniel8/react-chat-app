import styled from 'styled-components'

const ChatViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1d;
`

const ChatViewInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 8px;
  height: 100%;
  width: 100%;

  @media (min-width: 480px) {
    width: 60%;
    height: 80%;
  }
`

const ChatViewConnectedUsers = styled.div`
  font-style: italic;
  color: #353535;
  padding: 2px;
`

export {
  ChatViewContainer,
  ChatViewInnerContainer,
  ChatViewConnectedUsers,
}
