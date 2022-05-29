import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledButton = styled(Link)`
  height: 48px;
  width: 160px;
  box-shadow: 0 10px 20px -5px rgba(47, 0, 121, 0.3);
  border-radius: 24px;
  background-color: #2f0079;
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
`
