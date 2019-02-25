import * as functions from 'firebase-functions';
import { credential, initializeApp } from 'firebase-admin';
import { handler } from './handler';
const serviceAccountKey = require('../serviceAccountKey.json');

initializeApp({
  credential: credential.cert(serviceAccountKey)
})

export const ronSwanson = functions
  .firestore
  .document('/users/{userId}/soups/{soupId}')
  .onCreate(handler);
