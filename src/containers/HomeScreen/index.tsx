import React from 'react'
import { ContentContainer, Text, Title, ImageBG } from './styles'
import Header from '../../components/Header'
import Button from '../../components/Button'

const HomeScreen = () => (
  <>
    <Header />
    <ContentContainer>
      <Title>Scan your ID</Title>
      <Text>
        Take a picture. It may take time to validate your personal information.
      </Text>
      <ImageBG>
        <Button text="Take a picture" to="/camera" />
      </ImageBG>
    </ContentContainer>
  </>
)

export default HomeScreen
