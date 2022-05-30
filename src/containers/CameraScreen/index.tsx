import React from 'react'
import { ContentContainer, BgContainer } from './styles'
import TextContainer from '../../components/TextContainer'
import Button from '../../components/Button'
import IDScan from '../IDScan'

const CameraScreen = () => (
  <BgContainer>
    <ContentContainer>
      <TextContainer
        titleText="Take picture"
        descriptionText="Fit your ID card inside the frame. The picture will be taken automatically."
        color="#fff"
      />
      <IDScan />
      <Button text="Cancel" to="/" color="transparent" shadow="none" />
    </ContentContainer>
  </BgContainer>
)

export default CameraScreen
