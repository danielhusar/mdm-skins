const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mdm-skins-prod',
  port: process.env.PORT || 8000,
  baseURL: process.env.BASE_URL || 'https://www.mdm-skins.com',
};

module.exports = config;
