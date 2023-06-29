import { memo, useCallback, useEffect, useState } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'

import EpisodeCard from 'components/EpisodeCard'
import { BgEpisodes } from 'components/EpisodeCard/style'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { EpisodeType } from 'components/types/EpisodeType'

import { BannerEpisodes, Title } from './styles'

const Episodes: React.FC = () => {
  const [episodes, setEpisodes] = useState<EpisodeType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchEpisodes = useCallback(async () => {
    const { results } = await fetch(
      'https://rickandmortyapi.com/api/episode',
    ).then((response) => response.json())

    setIsLoading(false)
    setEpisodes(results)
  }, [])

  useEffect(() => {
    fetchEpisodes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 pt-5 pb-5">
            {!isLoading &&
              episodes.map((episode) => (
                <Col key={episode.id} className="d-flex">
                  <EpisodeCard episode={episode} />
                </Col>
              ))}
          </Row>
        </Container>
      </BgEpisodes>
      <Footer />
    </>
  )
}

export default memo(Episodes)
