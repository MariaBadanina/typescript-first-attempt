import styled, { css } from 'styled-components'
import bg from '../../assets/id_bg.svg'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 45px 30px;
`

const textStyles = css`
  line-height: 24px;
  text-align: center;
  color: #000000;
`

export const Title = styled.h1`
  ${textStyles};
  font-size: 21px;
  font-weight: bold;
  margin: 0;
`
export const Text = styled.p`
  ${textStyles};
  font-size: 16px;
`
export const ImageBG = styled.div`
  width: 260px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  border-radius: 12px;
  background-image: url(${bg});
  background-size: initial;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.15);
`
