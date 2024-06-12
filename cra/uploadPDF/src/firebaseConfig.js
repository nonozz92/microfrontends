import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDviYs7uMsQ993NrggFVnx_4FhcBDPFmkc",
  authDomain: "microfront-36043.firebaseapp.com",
  projectId: "microfront-36043",
  storageBucket: "microfront-36043.appspot.com",
  messagingSenderId: "1084234791800",
  appId: "1:1084234791800:web:1445287b0bfdb63d68268d",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
