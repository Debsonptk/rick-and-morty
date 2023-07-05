import { memo } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import finger from '../../assets/finger.png'
import imgfooter from '../../assets/imgfooter.png'
import { BgFooter, SizeLogo } from './style'

const Menu: React.FC = () => (
  <BgFooter>
    <Container>
      <Row className="justify-content-around">
        <Col className=" d-flex  ">
          <div>
            <SizeLogo src={finger} alt="finger" className="img-fluid" />
          </div>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <div>
            <SizeLogo src={imgfooter} alt="logo" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  </BgFooter>
)

export default memo(Menu)
