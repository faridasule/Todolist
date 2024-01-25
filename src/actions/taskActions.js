import { collection, addDoc, serverTimestamp, getFirestore } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
// import { getFirestore } from 'redux-firestore';
// import {db} from "../config/firebaseConfig"


export const addTask = (task) => {

 
  return async (dispatch, getState, { getFirebase}) => {
    try {
        // const db = getFirestore()

      console.log('Trying to add task:', task);

     const docRef = collection(db, 'Tasks')
    const data = {
    name: task,
  }

      
      addDoc(docRef, data)
      // console.log('Document written with ID:', docRef.id);

      dispatch({
        type: 'ADD_TASK',
        task: { ...task, date: new Date() },
      });
    } catch (err) {
      console.error('Error adding task:', err);

      dispatch({
        type: 'ADD_TASK_ERR',
        err,
      });
    }
  };
};

