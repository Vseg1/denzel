const {MongoClient} = require('mongodb');
const CONNECTION_URL = "mongodb+srv://vseg1:Jesuila2209*@cluster0-vd3vq.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "denzel";

module.exports = async () => {
  const client = await MongoClient.connect(CONNECTION_URL, {'useNewUrlParser': true});

  return {
    client,
    'db': client.db(DATABASE_NAME)
  };
};