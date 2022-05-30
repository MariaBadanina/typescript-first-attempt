import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from '../HomeScreen'
import CameraScreen from '../CameraScreen'
import { ScreenContainer } from './styles'

const MainContainer = () => (
  <ScreenContainer>
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/camera" element={<CameraScreen />} />
      </Routes>
    </Router>
  </ScreenContainer>
)

export default MainContainer
