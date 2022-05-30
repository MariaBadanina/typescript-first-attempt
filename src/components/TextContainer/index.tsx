import React from 'react'
import { Description, Title, Container } from './styles'
import { TextProps } from './types'

const TextContainer = ({ titleText, descriptionText, color }: TextProps) => (
  <Container color={color}>
    <Title>{titleText}</Title>
    <Description>{descriptionText}</Description>
  </Container>
)

export default TextContainer
