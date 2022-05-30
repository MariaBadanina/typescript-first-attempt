import React, { useState, useEffect } from 'react'
import { ContentContainer, ImageBG } from './styles'
import Header from '../../components/Header'
import Button from '../../components/Button'
import TextContainer from '../../components/TextContainer'

const HomeScreen = () => {
  const [validationState, setValidationState] = useState<string | null>('')
  useEffect(() => {
    if (sessionStorage.getItem('response')) {
      setValidationState(sessionStorage.getItem('response'))
    }
  }, [])

  return (
    <>
      <Header />
      <ContentContainer>
        <TextContainer
          titleText="Scan your ID"
          descriptionText="Take a picture. It may take time to validate your personal information."
          color="#000"
        />
        {validationState && validationState === 'Approved' ? (
          <div style={{ border: '10px solid green' }}>Approved</div>
        ) : validationState === 'Too Much Glare' ? (
          <div style={{ border: '10px solid red' }}>Too Much Glare</div>
        ) : (
          <ImageBG>
            <Button
              text="Take a picture"
              to="/camera"
              color="#2f0079"
              shadow="0 10px 20px -5px rgba(47, 0, 121, 0.3)"
            />
          </ImageBG>
        )}
      </ContentContainer>
    </>
  )
}

export default HomeScreen
