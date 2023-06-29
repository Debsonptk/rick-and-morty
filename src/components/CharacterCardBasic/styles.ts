import styled from 'styled-components'

export const Card = styled.div`
  background-color: #3c3e44;
  color: white;
  width: 100%;
`

export const ImageContainer = styled.div<{ $image: string }>`
  background-image: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 300px;
  background-size: cover;
`
