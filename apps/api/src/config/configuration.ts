export default () => ({
  app: {
    name:
      process.env.APP_NAME ??
      'ARMIN Security AI',

    environment:
      process.env.NODE_ENV ??
      'development',

    port:
      Number(process.env.API_PORT) ||
      4000,
  },

  ai: {
    url:
      process.env.AI_SERVICE_URL ??
      'http://localhost:8000',
  },

  redis: {
    url:
      process.env.REDIS_URL ??
      'redis://localhost:6379',
  },

  database: {
    url:
      process.env.DATABASE_URL ??
      'postgresql://armin:armin@localhost:5432/armin_security',
  },

  storage: {
    endpoint:
      process.env.STORAGE_ENDPOINT ??
      'http://localhost:9000',

    accessKey:
      process.env.STORAGE_ACCESS_KEY ??
      'armin',

    secretKey:
      process.env.STORAGE_SECRET_KEY ??
      'arminpassword',

    bucket:
      process.env.STORAGE_BUCKET ??
      'armin-security',
  },
});