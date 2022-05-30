import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getResponse } from '../../utils/getResponse'
import ScanScreen from '../../components/ScanScreen'
import { Text, TextContainer } from './styles'
import { ReactComponent as ApprovedIcon } from '../../assets/accepted.svg'
import { ReactComponent as Light } from '../../assets/light.svg'

const IDScan = () => {
  const [data, setData] = useState('')
  const history = useNavigate()

  useEffect(() => {
    getResponse().then((res) => setData(res.data.summary.outcome))
  }, [])

  useEffect(() => {
    if (data) {
      sessionStorage.setItem('response', data)
      setTimeout(() => {
        history('/')
      }, 2000)
    }
  }, [data])

  return (
    <>
      <ScanScreen validation={data} />
      {data === 'Approved' ? (
        <TextContainer>
          <ApprovedIcon />
          <Text>Picture taken</Text>
        </TextContainer>
      ) : data === 'Too Much Glare' ? null : (
        <TextContainer>
          <Light />
          <Text>Room lighting is too low</Text>
        </TextContainer>
      )}
    </>
  )
}

export default IDScan
