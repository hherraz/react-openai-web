import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyDDxH-qXfZRoOe-aotGGos_3uY1X83vgpI",
  authDomain: "firechat-e9bcd.firebaseapp.com",
  databaseURL: "https://firechat-e9bcd.firebaseio.com",
  projectId: "firechat-e9bcd",
  storageBucket: "firechat-e9bcd.appspot.com",
  messagingSenderId: "758403002783",
  appId: "1:758403002783:web:df944b93bbda85271f0daa",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const firestore = getFirestore(firebase);

function App() {
  return (
    <div className="App">
      <h1>HOLA!!!</h1>
    </div>
  );
}

export default App;
