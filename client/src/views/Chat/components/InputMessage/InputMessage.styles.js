import styled from 'styled-components'

const InputMessageForm = styled.form`
  display: flex;
  border-top: 2px solid #d3d3d3;
`

const InputMessageInput = styled.input`
  border: none;
  border-radius: 0;
  padding: 12px;
  width: 80%;
  font-size: 1.2em;
`

const InputMessageButton = styled.button`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  display: inline-block;
  border: none;
  width: 20%;
`

export { InputMessageForm, InputMessageInput, InputMessageButton }
