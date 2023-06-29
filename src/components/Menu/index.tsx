import { memo } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import logo from '../../assets/logo.jpeg'
import { SizeLogo } from './styles'

const Menu: React.FC = () => (
  <Container>
    <Row className="justify-content-around">
      <Col className="pt-3 pb-3 d-flex ">
        <div>
          <SizeLogo src={logo} alt="logo" />
        </div>
      </Col>
      <Col className="pt-3 pb-3 d-flex ">
        <h2 className="text-center">The Rick and Morty API</h2>
      </Col>
      <Col className="d-flex d-none d-lg-flex justify-content-end">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-nav">
            <a className="navbar-brand" href="/">
              Home
            </a>
            <a className="nav-item nav-link active" href="/location">
              Locations
            </a>
            <a className="nav-item nav-link active" href="/episodes">
              Episodes
            </a>
          </div>
        </nav>
      </Col>
    </Row>
  </Container>
)

export default memo(Menu)
