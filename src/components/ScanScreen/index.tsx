import React from 'react'
import { ScanBox, MovingBar } from './styles'
import { ScanScreenProps } from './types'

const ScanScreen = ({ validation }: ScanScreenProps) => {
  return (
    <ScanBox
      color={
        validation === 'Approved'
          ? '#69cc8b'
          : validation === 'Too Much Glare'
          ? '#C00000'
          : 'transparent'
      }
    >
      <MovingBar />
    </ScanBox>
  )
}

export default ScanScreen
