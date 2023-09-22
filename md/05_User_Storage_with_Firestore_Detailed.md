# User Storage with Firestore in a Next.js Project

## Introduction

Firestore is a NoSQL database provided by Firebase. It allows you to store and sync data for client- and server-side development. This guide will walk you through the steps to integrate Firestore into a Next.js project for user storage.

## Prerequisites

- Firebase SDK installed
- Firebase initialized in your Next.js project

## Step-by-Step Guide

### Step 1: Import Firestore

First, import Firestore in the file where you intend to use it.

```javascript
import firebase from '../firebaseConfig';
const db = firebase.firestore();
```

### Step 2: Create a Collection

In Firestore, data is saved in collections. To create a collection:

```javascript
db.collection('users').add({
  name: 'John',
  email: 'john@example.com'
});
```

### Step 3: Read Data

To read data from a collection:

```javascript
db.collection('users').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
});
```

### Step 4: Update Data

To update data in a collection:

```javascript
db.collection('users').doc('docID').update({
  name: 'Jane'
});
```

### Step 5: Delete Data

To delete data:

```javascript
db.collection('users').doc('docID').delete();
```

### Step 6: Real-time Updates

Firestore allows real-time updates. To listen for changes:

```javascript
db.collection('users').onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      console.log('New user:', change.doc.data());
    }
  });
});
```

## Conclusion

You've successfully integrated Firestore for user storage in your Next.js project. You can now perform CRUD operations and listen for real-time updates.