import styled from 'styled-components'

import cover from '../../assets/characterbanner.jpeg'

export const BgHome = styled.div`
  background-color: #272b33;
  padding-top: 50px;
  padding-bottom: 50px;
`
export const BannerHome = styled.div`
  background-image: url(${cover});
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 100px;
  padding-bottom: 100px;
`

export const Title = styled.h1`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 5px;
  width: fit-content;
  margin: 0 auto;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 50px;
    width: 100px;
    height: 3px;
    display: inline-block;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    background-color: rgba(0, 0, 0, 0.5);
    width: fit-content;
    margin: 0 auto;
  }
`
