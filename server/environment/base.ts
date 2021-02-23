export const environment = {
  port: process.env.PORT || 3000,
  production: false,
  db: {
    uri: process.env.MONGODB_URI
  },
  questionsApi: 'https://opentdb.com/api.php?amount=15&type=multiple'

};