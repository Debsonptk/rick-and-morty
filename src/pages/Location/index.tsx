import { memo, useCallback, useEffect, useState } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'

import Footer from 'components/Footer'
import LocationCard from 'components/LocationCard'
import { BgLocation } from 'components/LocationCard/style'
import Menu from 'components/Menu'
import { LocationType } from 'components/types/LocationType'

import { BannerLocation, Title } from './styles'

const Location: React.FC = () => {
  const [locations, setLocations] = useState<LocationType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchLocations = useCallback(async () => {
    const { results } = await fetch(
      'https://rickandmortyapi.com/api/location',
    ).then((response) => response.json())

    setIsLoading(false)
    setLocations(results)
  }, [])

  useEffect(() => {
    fetchLocations()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Menu />
      <BannerLocation>
        <Title className="text-center text-white">LOCATIONS</Title>
      </BannerLocation>
      <BgLocation>
        <Container>
          {isLoading && (
            <div className="text-center pt-5">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
          <Row className="pt-5 pb-4 row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
            {!isLoading &&
              locations.map((location) => (
                <Col key={location.id} className="d-flex g-4">
                  <LocationCard location={location} />
                </Col>
              ))}
          </Row>
        </Container>
      </BgLocation>
      <Footer />
    </>
  )
}

export default memo(Location)
