import React, { useState, useEffect } from 'react';
import firebase from '../firebaseConfig';

const UserSettings = () => {
  const [settings, setSettings] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: ''
  });

  const db = firebase.firestore();

  useEffect(() => {
    const fetchData = async () => {
      const doc = await db.collection('users').doc(firebase.auth().currentUser.uid).get();
      if (doc.exists) {
        setSettings(doc.data());
      }
    };
    fetchData();
  }, []);

  const handleSubmit = () => {
    db.collection('users').doc(firebase.auth().currentUser.uid).set(settings);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  return (
    <div>
      <input type='text' name='field1' value={settings.field1} onChange={handleChange} />
      <input type='text' name='field2' value={settings.field2} onChange={handleChange} />
      <input type='text' name='field3' value={settings.field3} onChange={handleChange} />
      <input type='text' name='field4' value={settings.field4} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserSettings;