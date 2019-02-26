import * as functions from 'firebase-functions';
import { firestore } from 'firebase-admin';
import fetch = require('node-fetch');
import assert = require('assert');

export const handler = (
  path: string,
  accessor,
  title: string,
) => async (
  snapshot: firestore.DocumentSnapshot,
  context: functions.EventContext
): Promise<true> => {
    console.log(context.params);
    const { userId, soupId } = context.params;
    const body = await fetch(path)
      .then(res => res.json())
      .then(json => accessor(json));
    assert(body);

    const docPath = `users/${userId}/soups/${soupId}/ingredients/${title.replace(' ', '_')}`;

    await firestore().doc(docPath).set({
      title,
      body,
    })
    console.log('wrote to path ', docPath);
    return true;
  }