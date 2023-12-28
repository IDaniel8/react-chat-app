import styled from 'styled-components'
import { Link } from 'react-router-dom'

import OnlineIcon from '@assets/onlineIcon.png'
import CloseIcon from '@assets/closeIcon.png'

const InfoBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2979ff;
  border-radius: 4px 4px 0 0;
  height: 60px;
  width: 100%;
`

const InfoBarLeftInnerContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 5%;
  color: white;
  gap: 6px;
`

const InfoBarRightInnerContainer = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 5%;
`

const InforBarOnlineIcon = styled.img.attrs({ src: OnlineIcon })``

const InforBarCloseIcon = styled.img.attrs({ src: CloseIcon })``

const InfoBarTitle = styled.h3``

const InfoBarLink = styled(Link)``

export {
  InfoBarContainer,
  InforBarOnlineIcon,
  InforBarCloseIcon,
  InfoBarLeftInnerContainer,
  InfoBarLink,
  InfoBarRightInnerContainer,
  InfoBarTitle,
}
