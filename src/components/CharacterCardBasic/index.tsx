import { memo } from 'react'

import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { CharacterType } from 'components/types/CharacterType'

import { strToSlug } from 'helpers'

import { Card, ImageContainer } from './styles'

interface ICharacterProps {
  character: CharacterType
}

const CharacterCard: React.FC<ICharacterProps> = ({ character }) => {
  return (
    <Card className="card mb-3">
      <div className="row">
        <Link
          to={`/character/${character.id}/${strToSlug(character.name)}`}
          className="col-md-4"
        >
          <ImageContainer
            $image={character.image}
            className="h-100 w-100 bg-primary"
          />
        </Link>
        <div className="col-md-8">
          <div className="card-body">
            <Link
              to={`/character/${character.id}/${character.name}`}
              className="text-decoration-none text-white"
            >
              <h4 className="card-title">{character.name}</h4>
            </Link>
            <h6 className="card-text mb-4">
              {character.status === 'Alive' ? (
                <Spinner
                  animation="grow"
                  variant="success"
                  size="sm"
                  className="mx-1"
                />
              ) : (
                <Spinner
                  animation="grow"
                  variant="danger"
                  size="sm"
                  className="mx-1"
                />
              )}
              {character.status} - {character.species}
            </h6>
            <div className="pt-3">
              <span>Last known location:</span>
              <h5>{character.location.name}</h5>
            </div>
            <div className="pt-3">
              <span>First seen in:</span>
              <h5>{character.origin.name}</h5>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default memo(CharacterCard)
