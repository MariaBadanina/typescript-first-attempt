import styled from 'styled-components'
import cameraBg from '../../assets/camera_bg.png'

export const BgContainer = styled.div`
  background-image: url(${cameraBg});
  background-size: cover;
  width: 100%;
  height: 100%;
  color: #fff;
`

export const ContentContainer = styled.div`
  background-color: rgba(20, 28, 38, 0.75);
  width: 100%;
  height: 100%;
  padding-top: 100px;
  box-sizing: border-box;
`
