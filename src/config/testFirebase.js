// src/config/testFirebase.js
import { testFirebaseConnection } from './firebase';

const runFirebaseTest = async () => {
  console.log('Starting Firebase connection test...');
  
  try {
    const isConnected = await testFirebaseConnection();
    if (isConnected) {
      console.log('✅ Firebase connection successful');
    } else {
      console.log('❌ Firebase connection failed');
    }
  } catch (error) {
    console.error('❌ Firebase test error:', error);
  }
};

export default runFirebaseTest;