const Config = {
  app: {
    name: import.meta.env.VITE_APP_NAME,
    version: import.meta.env.PACKAGE_VERSION,
  },
  api: {
    url: import.meta.env.VITE_API_URL,
  },
}

export default Config
