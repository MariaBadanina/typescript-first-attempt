import React from 'react'
import { ScanBox, Text } from './styles'
import { ScanScreenProps, IconProps } from './types'
import { ReactComponent as RejectedIcon } from '../../assets/white_cross.svg'
import { ReactComponent as ApprovedIcon } from '../../assets/white_tick.svg'
import Button from '../../components/Button'

const Icon = ({ validation }: IconProps) => {
  return validation === 'Approved' ? (
    <ApprovedIcon />
  ) : validation === 'Too Much Glare' ? (
    <RejectedIcon />
  ) : null
}

const ScanScreen = ({ validation, text }: ScanScreenProps) => {
  const color =
    validation === 'Approved'
      ? '#69cc8b'
      : validation === 'Too Much Glare'
      ? '#C00000'
      : 'transparent'

  return (
    <ScanBox color={color}>
      {validation === 'Too Much Glare' && (
        <Button
          text="Retake a picture"
          to="/camera"
          color="#2f0079"
          shadow="0 10px 20px -5px rgba(47, 0, 121, 0.3)"
        />
      )}
      <Text color={color}>
        <Icon validation={validation} />
        {text}
      </Text>
    </ScanBox>
  )
}

export default ScanScreen
