import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #1e293b;
  font-weight: bold;
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #334155;
  max-width: 600px;
  @media screen and (max-width: 576px) {
    font-size: 10px;
    max-width: 300px;
  }
`

export const Image = styled.img`
  height: 350px;
  width: 550px;
  @media screen and (max-width: 576px) {
    height: 250px;
    width: 350px;
  }
`
export const Button = styled.button`
  border: 0px none;
  background-color: #1f81ff;
  height: 35px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  padding: 15px;
  border-radius: 10px;
  @media screen and (max-width: 576px) {
    height: 20px;
  }
`
