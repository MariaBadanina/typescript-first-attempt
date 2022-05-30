import React, { useState, useEffect } from 'react'
import { ContentContainer, ImageBG } from './styles'
import Header from '../../components/Header'
import Button from '../../components/Button'
import TextContainer from '../../components/TextContainer'
import ResultScreen from '../../components/ResultScreen'

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
          <ResultScreen validation={validationState} text="Approved" />
        ) : validationState === 'Too Much Glare' ? (
          <ResultScreen validation={validationState} text="Rejected" />
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
