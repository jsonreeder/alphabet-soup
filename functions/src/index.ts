import * as functions from 'firebase-functions';
import { credential, initializeApp } from 'firebase-admin';
import { handler } from './handler';
const serviceAccountKey = require('../serviceAccountKey.json');

initializeApp({
  credential: credential.cert(serviceAccountKey)
})

const path = '/users/{userId}/soups/{soupId}';

export const catFact = functions
  .firestore
  .document(path)
  .onCreate(
    handler(
      'https://cat-fact.herokuapp.com/facts/random',
      json => json.text,
      'Cat Fact',
    )
  );

export const chuckNorris = functions
  .firestore
  .document(path)
  .onCreate(
    handler(
      'https://api.chucknorris.io/jokes/random',
      json => json.value,
      'Chuck Norris',
    )
  );

export const ronSwanson = functions
  .firestore
  .document(path)
  .onCreate(
    handler(
      'http://ron-swanson-quotes.herokuapp.com/v2/quotes',
      json => json[0],
      'Ron Swanson',
    )
  );
