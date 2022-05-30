import styled, { css } from 'styled-components'
import bg from '../../assets/id_bg.svg'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 45px 30px;
`

export const ImageBG = styled.div`
  height: 160px;
  width: 260px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.15);
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
`
