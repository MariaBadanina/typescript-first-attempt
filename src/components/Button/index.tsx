import React from 'react'
import { StyledButton } from './styles'
import { ButtonProps } from './types'

const Button = ({ text, to }: ButtonProps) => (
  <StyledButton to={to}>{text}</StyledButton>
)

export default Button
