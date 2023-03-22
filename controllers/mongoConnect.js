const { MongoClient, ServerApiVersion } = require('mongodb');

const uri =
  'mongodb+srv://admin:ahdrhelql0105@cluster0.8sphltr.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
module.exports = client;
