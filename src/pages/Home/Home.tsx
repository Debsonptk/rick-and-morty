import { memo, useCallback, useEffect, useState } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'

import CharacterCardBasic from 'components/CharacterCardBasic'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

import Api from 'services/api'

import { Pagination } from 'styles/pagination'

import { CharacterType } from 'types/CharacterType'

import { BannerHome, BgHome, Title } from './styles'

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const fetchCharacters = useCallback(async (page: number) => {
    setIsLoading(true)

    const { data } = await Api.get('/character', {
      params: {
        page,
      },
    })

    setIsLoading(false)
    setCharacters(data.results)
    setTotalPages(data.info.pages)
    setCurrentPage(page)
  }, [])

  useEffect(() => {
    fetchCharacters(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePageChange = useCallback(
    (p: { selected: number }) => fetchCharacters(p.selected + 1),
    [fetchCharacters],
  )

  return (
    <>
      <Menu />
      <BannerHome>
        <Title className="text-center text-white">CHARACTERS</Title>
      </BannerHome>
      <BgHome>
        <Container>
          {isLoading && (
            <div className="text-center pt-5">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
          {!isLoading && (
            <>
              <Row className="row-cols-1 row-cols-md-2">
                {characters.map((character) => (
                  <Col className="d-flex" key={character.id}>
                    <CharacterCardBasic character={character} />
                  </Col>
                ))}
              </Row>
              {totalPages > 1 && (
                <Pagination
                  className="pt-3"
                  forcePage={currentPage - 1}
                  nextLabel=">"
                  onPageChange={handlePageChange}
                  pageRangeDisplayed={3}
                  pageCount={totalPages}
                  previousLabel="<"
                  marginPagesDisplayed={1}
                />
              )}
            </>
          )}
        </Container>
      </BgHome>
      <Footer />
    </>
  )
}

export default memo(Home)
