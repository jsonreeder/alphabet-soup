import * as functions from 'firebase-functions';
import { firestore } from 'firebase-admin';
import fetch = require('node-fetch');

export async function handler(
  snapshot: firestore.DocumentSnapshot,
  context: functions.EventContext
  ): Promise<boolean> {
    console.log(context.params);
    const response = await fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const json = await response.json();
    console.log(json);
    console.log(json[0]);
    return true;
}