const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/book-dev',
  port: process.env.PORT || 8001,
  baseURL: process.env.BASE_URL || 'http://book.dev',
};

module.exports = config;
