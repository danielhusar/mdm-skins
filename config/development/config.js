const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mdm-skins-dev',
  port: process.env.PORT || 8001,
  baseURL: process.env.BASE_URL || 'http://67.205.135.29:8001',
};

module.exports = config;
