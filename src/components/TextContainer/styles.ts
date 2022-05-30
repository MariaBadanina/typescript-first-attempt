import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 280px;
  margin: 0 auto;
  color: ${(props) => props.color};
`

const textStyles = css`
  line-height: 24px;
  text-align: center;
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
