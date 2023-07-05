import { memo } from 'react'

import { LocationType } from 'components/types/LocationType'

import { Card } from './style'

interface ILocationProps {
  location: LocationType
}

const LocationCard: React.FC<ILocationProps> = ({ location }) => (
  <Card className="card mb-3 border-dark">
    <h3 className="card-header">{location.name}</h3>
    <div className="card-body text-dark">
      <div className="pb-3">
        <span>Type:</span>
        <h5 className="card-title">{location.type}</h5>
      </div>
      <div className="pb-3">
        <span>Dimension:</span>
        <h5 className="card-text">{location.dimension}</h5>
      </div>
      <div>
        <span>Created:</span>
        <h5>{new Date(location.created).toLocaleDateString()}</h5>
      </div>
    </div>
  </Card>
)

export default memo(LocationCard)
