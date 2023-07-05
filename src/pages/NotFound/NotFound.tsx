import { memo, useEffect } from 'react'

import useTitle from 'hooks/useTitle'

const NotFound: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('not-found.title')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <h1>not-found.title</h1>
}

export default memo(NotFound)
