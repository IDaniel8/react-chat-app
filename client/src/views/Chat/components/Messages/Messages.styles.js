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
  gap: 10px;
  word-break: break-all;
`

const MessageUserNameText = styled.div`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
  padding-left: unset;
  font-weight: 700;
`

const MessageUserSentText = styled.div`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: ${(props) => (props.isCurrentUser ? '#F3F3F3' : '#828282')};
  background: ${(props) =>
    props.isCurrentUser ? '#2979FF' : '#F3F3F3'};
  letter-spacing: 0.3px;
  border-radius: 20px;
  padding: 5px 20px;
`

const MessageAdminSentText = styled.div`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
  padding-left: 10px;
  padding-right: unset;
`

const MessageText = styled.div`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
  color: ${(props) => (props.isCurrentUser ? '#FFFFFF' : '#353535')};
`

const AdminMessage = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  & > strong {
    color: #2979ff;
  }
`

export {
  MessageList,
  MessageContainer,
  MessageUserNameText,
  MessageUserSentText,
  MessageAdminSentText,
  MessageText,
  AdminMessage,
}
