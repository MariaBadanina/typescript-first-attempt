import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ButtonWrapper = styled.div`
  box-shadow: ${(props) => props.color};
  border-radius: 24px;
`

export const StyledButton = styled(Link)`
  height: 48px;
  width: fit-content;
  padding: 0 22px;
  border-radius: 24px;
  background-color: ${(props) => props.color};
  color: #fff;
  border: none;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.35px;
  line-height: 24px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin: 0 auto;
`
