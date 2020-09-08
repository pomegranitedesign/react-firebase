/* firebase.ts  */
// All firebase code will be stored in this file (refs, etc.)

import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyCUwB9nIpLg15TRjgFhI2ucE4kH1tdkBHw',
	authDomain: 'bicom-2-2a22e.firebaseapp.com',
	databaseURL: 'https://bicom-2-2a22e.firebaseio.com',
	projectId: 'bicom-2-2a22e',
	storageBucket: 'bicom-2-2a22e.appspot.com',
	messagingSenderId: '469354342181',
	appId: '1:469354342181:web:6d1a3cd8f2fc677016dccc',
	measurementId: 'G-CVGGZXHZG5'
}

firebase.initializeApp(firebaseConfig)

// Database
export const db = firebase.firestore()

// Refs

export default firebase
