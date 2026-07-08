import { T as TSS_SERVER_FUNCTION } from "./server-CHo3IP9P.mjs";
import { l as libExports } from "../_libs/mongodb.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
let client = null;
let db = null;
async function connectToDatabase() {
  if (db) return db;
  const uri = process.env.mongoDB_URI;
  if (!uri) {
    throw new Error("Please define the mongoDB_URI environment variable");
  }
  if (!client) {
    client = new libExports.MongoClient(uri, {
      serverSelectionTimeoutMS: 15e3,
      connectTimeoutMS: 15e3,
      socketTimeoutMS: 3e4,
      maxPoolSize: 10,
      minPoolSize: 2,
      retryWrites: true,
      retryReads: true
    });
    await client.connect();
  }
  db = client.db("fastcomputers");
  return db;
}
export {
  connectToDatabase as a,
  createServerRpc as c
};
