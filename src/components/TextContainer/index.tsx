import React from 'react'
import { Text, Title, Container } from './styles'
import { TextProps } from './types'

const TextContainer = ({ titleText, descriptionText, color }: TextProps) => (
  <Container color={color}>
    <Title>{titleText}</Title>
    <Text>{descriptionText}</Text>
  </Container>
)

export default TextContainer
