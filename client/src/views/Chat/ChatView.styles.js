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
  width: 100vw;
  height: 100vh;

  @media (min-width: 480px) {
    width: 60vw;
    height: 80vh;
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
