module.exports = {
  apps: [
    {
      name: 'RESTful API',
      script: 'dist/src/index.js',
      watch: 'dist',
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
