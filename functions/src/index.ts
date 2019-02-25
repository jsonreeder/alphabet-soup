import * as functions from 'firebase-functions';
import { handler } from './handler';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const ronSwanson = functions
  .firestore
  .document('/users/{userId}/soups/{soupId}')
  .onCreate(handler);
