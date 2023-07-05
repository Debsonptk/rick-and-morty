import styled from 'styled-components'

interface IMenuProps {
  isMenuOpened: boolean
}

export const NavSection = styled.div`
  font-family: roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  display: block;
  font-size: 14px;
  color: black;
  font-weight: 700;
  text-transform: uppercase;
`

export const MenuMb = styled.div<IMenuProps>`
  background-color: #add8e6;
  height: 100rem;
  top: 0;
  left: ${(props) => (props.isMenuOpened ? 0 : -75)}%;
  padding: 0px;
  width: 75%;
  transition: all 0.2s ease-out;
  z-index: 10;
  > svg {
    position: absolute;
    top: 1rem;
  }

  a,
  a:visited {
    color: black;
  }
`
export const MenuOverlay = styled.div<IMenuProps>`
  opacity: ${(props) => (props.isMenuOpened ? 1 : 0)};
  visibility: ${(props) => (props.isMenuOpened ? 'visible' : 'hidden')};
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-out;
  z-index: 5;
  top: 0;
  height: 100vh;
`
