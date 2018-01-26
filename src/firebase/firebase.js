import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  
  firebase.initializeApp(config);

const database = firebase.database();


export{ firebase ,database as default };

/*
database.ref('expenses').push({
    description: 'expense 1',
    amount:1000,
    createdAt:1,
    note:'some note'
});

database.ref('expenses').push({
    description: 'expense 2',
    amount:2000,
    createdAt:2,
    note:'some note 2'
});

database.ref('expenses').push({
    description: 'expense 3',
    amount:3000,
    createdAt:3,
    note:'some note 3'
});



  const onValueChange = database.ref().on('value', (snapshot)=>{
        const val = snapshot.val();
        console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  }, (e) => {
      console.log('Error ', e);
  });

  setTimeout(()=>{
      database.ref('name').set('Mike');
  },3500)

  database.ref().set({
      name: 'Facundo Pezzola',
      age: 22,
     country:'Argentina'
  });

  database.ref('attributes').set({
      height:20,
      weight:20
  })*/