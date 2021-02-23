import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import * as S from './InfoBar.styles'

function InfoBar(props) {
  const { room } = props
  const history = useHistory()

  const closeChat = useCallback(() => {
    history.replace('/')
  }, [])

  return (
    <S.InfoBarContainer>
      <S.InfoBarLeftInnerContainer>
        <S.InforBarOnlineIcon />
        <S.InfoBarTitle>{room}</S.InfoBarTitle>
      </S.InfoBarLeftInnerContainer>
      <S.InfoBarRightInnerContainer>
        <S.InforBarCloseIcon onClick={closeChat} />
      </S.InfoBarRightInnerContainer>
    </S.InfoBarContainer>
  )
}

export default InfoBar
export { InfoBar }
