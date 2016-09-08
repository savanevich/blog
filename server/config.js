const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/simple-blog',
  port: process.env.PORT || 8000,
  secret: 'secret'
};

export default config;
