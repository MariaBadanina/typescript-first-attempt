import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from '../HomeScreen'
import CameraScreen from '../CameraScreen'
import { ScreenContainer } from './styles'

const MainContainer = () => (
  <ScreenContainer>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/camera" element={<CameraScreen />} />
      </Routes>
    </BrowserRouter>
  </ScreenContainer>
)

export default MainContainer
