const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('./teste4-b78ed-firebase-adminsdk-08qes-a72cffc46a');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const agendamentos = {
    nome: 'Roberto',
    email: 'roberto@gmail.com',
    telefone: '1199458965'
  };
  
  // Add a new document in collection "cities" with ID 'LA'
  const res = db.collection('agendamentos').doc('Agendamentos').set(agendamentos);