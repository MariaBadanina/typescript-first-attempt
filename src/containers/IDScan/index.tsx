import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getResponse } from '../../utils/getResponse'

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
      }, 1000)
    }
  }, [data])

  return (
    <div>
      {data === 'Approved' ? (
        <div style={{ border: '10px solid green' }}>{data}</div>
      ) : data === 'Too Much Glare' ? (
        <div style={{ border: '10px solid red' }}>{data}</div>
      ) : (
        <div style={{ border: '10px solid yellow' }}>Animation</div>
      )}
    </div>
  )
}

export default IDScan
