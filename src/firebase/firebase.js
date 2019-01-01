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
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };

  // // child_removed
  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // }); 

  // // child_changed
  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // }); 

  //  // child_added
  //  database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // }); 

  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];

  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });

  //     console.log(expenses);
  //   });



    // database.ref('expenses')
    // .on('value', (snapshot) => {
    //   const expenses = [];
    //   snapshot.forEach((childSnapshot) => {
    //     expenses.push({
    //       id: childSnapshot.key,
    //       ...childSnapshot.val()
    //     });
    //   });

    //   console.log(expenses);
    // });
  
     




  //   database.ref('expenses').push({
  //   description: 'Bent',
  //   notes: 'lorum ipsum',
  //   amount: 998989,
  //   createdAt: 125686565333
  // });



  // database.ref('notes/-LSAVLAJSADJ-KWtPdjz').remove();


  // database.ref('notes').push({
  //   title: 'Course Topics',
  //   body: 'reacr native, angulate'
  // });



// database.ref('notes').set(notes);


  // database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} in ${val.location.city}`);
  // });



  //change the data and make sure it reprints


  // database.ref()
  //   .once('value')
  //     .then((snapshot) => {
  //       const val =snapshot.val();
  //       console.log(val);
  //     })
  //     .catch((e) => {
  //       console.log('Error fetching data, e');
  //     });

  // database.ref().set({
  //   name: 'Omar Khalil',
  //   age: 27,
  //   stressLevel: 7,
  //   job: {
  //     title: 'Software Dev',
  //     company: 'Google'
  //   },
  //   location: {
  //       city: 'Luton',
  //       country:'UK'
  //   }
  // }).then(() => {
  //   console.log('Data is saved');
  // }).catch((error) => {
  //   console.log('This failed.', error);
  // });

  // database.ref('isSingle').set(null);

  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'London'
  // });
  

  // database.ref()
  // .remove()
  // .then(() => {
  //   console.log("Remove succeeded.")
  // })
  // .catch((error) => {
  //   console.log("Remove failed: " + error.message)
  // });



