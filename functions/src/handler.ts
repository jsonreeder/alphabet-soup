import * as functions from 'firebase-functions';
import { firestore } from 'firebase-admin';

export function handler(snapshot: firestore.DocumentSnapshot, context: functions.EventContext) {
  console.log(context.params);
}