import firebase from 'firebase'

const firebaseConfig = {
    //the congig file goes here
    apiKey: "AIzaSyDwa0fWxE4ba7ZyYpf9oKfvP_e6vMlDzIs",
    authDomain: "real-estate-b610b.firebaseapp.com",
    databaseURL: "https://real-estate-b610b.firebaseio.com",
    projectId: "real-estate-b610b",
    storageBucket: "real-estate-b610b.appspot.com",
    messagingSenderId: "760961128649",
    appId: "1:760961128649:web:64a45c7e250268665ed518"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export {db, auth, provider, storage}