import axios from 'axios'

import Config from 'Config'

const Api = axios.create({
  baseURL: Config.api.url,
})

export default Api
