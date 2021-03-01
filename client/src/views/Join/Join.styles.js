import styled from 'styled-components'

const EmptyBox = styled.div``
const JoinContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background-color: #1a1a1d;
`
const JoinInnerContainer = styled.div`
  width: 100%;
  max-width: 280px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`
const JoinHeading = styled.h1`
  color: white;
  font-size: 2.5em;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
`
const JoinInput = styled.input`
  border-radius: 0;
  border: none;
  padding: 15px 20px;
  width: 100%;
`
const JoinButton = styled.button`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  width: 100%;

  &:focus {
    outline: none;
  }
`

const ErrorMessage = styled.div`
  color: #e63946;
  font-size: 16px;
  font-weight: 500;
  margin: 20px 0;
`

export {
  EmptyBox,
  JoinButton,
  JoinContainer,
  JoinHeading,
  JoinInnerContainer,
  JoinInput,
  ErrorMessage,
}
