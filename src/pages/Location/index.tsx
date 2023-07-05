import { memo, useCallback, useEffect, useState } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'

import Footer from 'components/Footer'
import LocationCard from 'components/LocationCard'
import { BgLocation } from 'components/LocationCard/style'
import Menu from 'components/Menu'
import { LocationType } from 'types/LocationType'

import { Pagination } from 'styles/pagination'

import { BannerLocation, Title } from './styles'
import Api from 'services/api'

const Location: React.FC = () => {
  const [locations, setLocations] = useState<LocationType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const fetchLocations = useCallback(async (page: number) => {
    const { data } = await Api.get('/location', {
      params: {
        page,
      },
    })

    setIsLoading(false)
    setLocations(data.results)
    setTotalPages(data.info.pages)
    setCurrentPage(page)
  }, [])

  useEffect(() => {
    fetchLocations(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePageChange = useCallback(
    (page: number) => {
      fetchLocations(page)
    },
    [fetchLocations],
  )

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
          {totalPages > 1 && (
            <Pagination
              className="pb-3"
              forcePage={currentPage - 1}
              nextLabel=">"
              onPageChange={(p: { selected: number }) =>
                handlePageChange(p.selected + 1)
              }
              pageRangeDisplayed={3}
              pageCount={totalPages}
              previousLabel="<"
              marginPagesDisplayed={1}
            />
          )}
        </Container>
      </BgLocation>
      <Footer />
    </>
  )
}

export default memo(Location)
