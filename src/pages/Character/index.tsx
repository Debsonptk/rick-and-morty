import { memo, useCallback, useEffect, useState } from 'react'

import { Container } from 'react-bootstrap'
import Lottie from 'react-lottie'
import { useParams } from 'react-router-dom'

import animationData from 'assets/animation/loading-morty.json'

import CharacterCardComplete from 'components/CharacterCardComplete'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

import Api from 'services/api'

import { CharacterType } from 'types/CharacterType'

import { BannerHome, BgPage, Title } from './styles'

const Character: React.FC = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState<CharacterType | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchCharacter = useCallback(async () => {
    setIsLoading(true)
    const { data: response } = await Api.get(`/character/${id}`)
    try {
      setCharacter(response)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetchCharacter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Menu />
      <BannerHome>
        <Title className="text-center text-white">CHARACTER</Title>
      </BannerHome>
      <BgPage>
        <Container>
          {isLoading && (
            <div className="text-center pt-5">
              <Lottie
                options={{
                  animationData,
                  autoplay: true,
                  loop: true,
                }}
                height={250}
                width={250}
              />
            </div>
          )}
          {!isLoading && character && (
            <div className="pt-4 pb-4">
              <CharacterCardComplete character={character} />
            </div>
          )}
        </Container>
      </BgPage>
      <Footer />
    </>
  )
}

export default memo(Character)
