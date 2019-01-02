import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAos0MXPi_9yImiIrWFlV6RQwfec616gxU",
    authDomain: "catch-of-the-day-matt-f53f9.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-matt-f53f9.firebaseio.com",
    projectId: "catch-of-the-day-matt-f53f9",
    storageBucket: "catch-of-the-day-matt-f53f9.appspot.com",
    messagingSenderId: "906033198506"
  })

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base