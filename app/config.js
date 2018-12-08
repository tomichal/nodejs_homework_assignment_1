var environments = {
  staging: {
    httpPort: 3000,
    envName: 'staging'
  },

  production: {
    httpPort: 5000,
    envName: 'production'
  }
}

var environment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
environment = environments[environment] || environments.staging;

module.exports = environment;