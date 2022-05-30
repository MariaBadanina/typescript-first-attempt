import styled from 'styled-components'
import idCard from '../../assets/id_card.png'

export const ScanBox = styled.div`
  width: 290px;
  height: 180px;
  margin: 60px auto 25px;
  background-image: url(${idCard});
  box-sizing: border-box;
  border: 2px solid ${(porps) => porps.color};
  border-radius: 18px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Text = styled.div`
  background-color: ${(porps) => porps.color};
  width: fit-content;
  padding: 0 10px 0 0;
  height: 30px;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  right: 24px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.75px;
  line-height: 12px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
