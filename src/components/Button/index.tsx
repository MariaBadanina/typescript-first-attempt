import React from 'react'
import { StyledButton, ButtonWrapper } from './styles'
import { ButtonProps } from './types'

const Button = ({ text, to, color, shadow }: ButtonProps) => (
  <ButtonWrapper color={shadow}>
    <StyledButton to={to} color={color}>
      {text}
    </StyledButton>
  </ButtonWrapper>
)

export default Button
