import { memo, useCallback, useEffect, useState } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'

import CharacterCardBasic from 'components/CharacterCardBasic'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { CharacterType } from 'components/types/CharacterType'

import { BannerHome, BgHome, Title } from './styles'

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchCharacters = useCallback(async () => {
    const { results } = await fetch(
      'https://rickandmortyapi.com/api/character',
    ).then((response) => response.json())

    setIsLoading(false)
    setCharacters(results)
  }, [])

  useEffect(() => {
    fetchCharacters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          <Row className="row-cols-1 row-cols-md-2">
            {!isLoading &&
              characters.map((character) => (
                <Col className="d-flex" key={character.id}>
                  <CharacterCardBasic character={character} />
                </Col>
              ))}
          </Row>
        </Container>
      </BgHome>
      <Footer />
    </>
  )
}

export default memo(Home)
