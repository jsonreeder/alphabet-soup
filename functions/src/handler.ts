import * as functions from 'firebase-functions';
import { firestore } from 'firebase-admin';
import fetch = require('node-fetch');

export async function handler(
  snapshot: firestore.DocumentSnapshot,
  context: functions.EventContext
  ): Promise<boolean> {
    const { userId, soupId } = context.params;
    const response = await fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const json = await response.json();
    const body = json[0]
    console.log(body);

    await firestore().doc(`users/${userId}/soups/${soupId}/ingredients/ronSwanson`).set({
      title: 'Ron Swanson',
      body,
    })
    return true;
}