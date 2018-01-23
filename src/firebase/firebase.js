import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCIMbnYoB_JgY862ccbgd2ZEI-9VPuNcoA",
    authDomain: "expensify-c6a05.firebaseapp.com",
    databaseURL: "https://expensify-c6a05.firebaseio.com",
    projectId: "expensify-c6a05",
    storageBucket: "",
    messagingSenderId: "585676385785"
  };
  firebase.initializeApp(config);

  const database = firebase.database();

  database.ref().set({
      name: 'Facundo Pezzola',
      age: 22,
     country:'Argentina'
  });

  database.ref('attributes').set({
      height:20,
      weight:20
  })