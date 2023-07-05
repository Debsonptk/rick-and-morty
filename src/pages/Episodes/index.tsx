import { memo, useCallback, useEffect, useState } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'

import EpisodeCard from 'components/EpisodeCard'
import { BgEpisodes } from 'components/EpisodeCard/style'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

import Api from 'services/api'

import { Pagination } from 'styles/pagination'

import { EpisodeType } from 'types/EpisodeType'

import { BannerEpisodes, Title } from './styles'

const Episodes: React.FC = () => {
  const [episodes, setEpisodes] = useState<EpisodeType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const fetchEpisodes = useCallback(async (page: number) => {
    setIsLoading(true)
    try {
      const { data } = await Api.get('/episode', {
        params: {
          page,
        },
      })
      setEpisodes(data.results)
      setTotalPages(data.info.pages)
      setCurrentPage(page)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchEpisodes(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePageChange = useCallback(
    (page: number) => {
      fetchEpisodes(page)
    },
    [fetchEpisodes],
  )

  return (
    <>
      <Menu />
      <BannerEpisodes>
        <Title className="text-center text-white">EPISODES</Title>
      </BannerEpisodes>
      <BgEpisodes>
        <Container>
          {isLoading && (
            <div className="mt-5 text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 pt-5 pb-5 g-4">
            {!isLoading &&
              episodes.map((episode) => (
                <Col key={episode.id} className="d-flex">
                  <EpisodeCard episode={episode} />
                </Col>
              ))}
          </Row>
          {totalPages > 1 && (
            <Pagination
              className="pt-3 pb-4"
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
      </BgEpisodes>
      <Footer />
    </>
  )
}

export default memo(Episodes)
