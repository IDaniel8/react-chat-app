import styled from 'styled-components'
import ScrollToBottom from 'react-scroll-to-bottom'

const MessageList = styled(ScrollToBottom)`
  padding: 5% 0;
  overflow: auto;
  flex: auto;
`

const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.isCurrentUser ? 'row' : 'row-reverse'};
  justify-content: ${(props) =>
    props.isCurrentUser ? 'flex-end' : 'flex-start'};
  padding: 1% 5%;
  margin-top: 3px;
`

const MessageSentText = styled.p`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
  padding-left: ${(props) =>
    props.isCurrentUser ? 'unset' : '10px'};
  padding-right: ${(props) =>
    props.isCurrentUser ? '10px' : 'unset'};
`

const MessageBox = styled.div`
  background: ${(props) =>
    props.isCurrentUser ? '#2979FF' : '#F3F3F3'};
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
`

const MessageText = styled.div`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
  color: ${(props) => (props.isCurrentUser ? '#FFFFFF' : '#353535')};
`

export {
  MessageList,
  MessageContainer,
  MessageSentText,
  MessageBox,
  MessageText,
}
