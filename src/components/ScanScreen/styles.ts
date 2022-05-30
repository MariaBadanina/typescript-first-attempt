import styled, { css, keyframes } from 'styled-components'

export const ScanBox = styled.div`
  width: 290px;
  height: 180px;
  margin: 60px auto 25px;
  background-color: rgb(0 0 0 / 50%);
  box-sizing: border-box;
  border: 2px solid ${(porps) => porps.color};
  border-radius: 18px;
`

const animation = keyframes`
  0%, 100% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(160px);
  }
`
export const MovingBar = styled.div`
  height: 3px;
  width: 288px;
  margin: 0 auto;
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 2%,
    #56b6d2 50%,
    rgba(0, 0, 0, 0) 98%
  );
  animation: ${animation} 2s infinite;
  animation-direction: alternate-reverse;
`
