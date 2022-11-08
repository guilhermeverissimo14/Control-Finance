import React from 'react';
import firebase from 'firebase/app';
import { View } from 'react-native';

import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHYA7byYROLeBz7CUE6BQKohLmAphEq24",
  authDomain: "control-finance-500eb.firebaseapp.com",
  projectId: "control-finance-500eb",
  storageBucket: "control-finance-500eb.appspot.com",
  messagingSenderId: "186033550664",
  appId: "1:186033550664:web:209ee3b51e2faf854a6f7d"
};

// Initialize Firebase
if (firebase.app.length === 0){
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;