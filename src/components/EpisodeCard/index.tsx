import { memo } from 'react'

import { EpisodeType } from 'components/types/EpisodeType'

import { Card } from './style'

interface IEpisodeProps {
  episode: EpisodeType
}

const LocationCard: React.FC<IEpisodeProps> = ({ episode }) => (
  <Card className="card mb-3 border-light">
    <h2 className="card-header text-center">{episode.episode}</h2>
    <div className="card-body text-dark">
      <div className="pb-3 text-center">
        <span>Episode:</span>
        <h5 className="card-title">{episode.name}</h5>
      </div>
      <div className="pb-3 text-center">
        <span>When Did It Air:</span>
        <h5 className="card-text">{episode.air_date}</h5>
      </div>
      <div className="text-center">
        <span>Created:</span>
        <h5>{new Date(episode.created).toLocaleDateString()}</h5>
      </div>
    </div>
  </Card>
)

export default memo(LocationCard)
