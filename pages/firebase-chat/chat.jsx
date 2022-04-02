/* eslint-disable react/jsx-key */
import React from "react";
import {  db,auth } from "./firebase-init";
import {  signInWithPopup,GoogleAuthProvider} from "firebase/auth";

import { collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function FirebaseChat() {
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="App">
        <header>
        <h1> ⚛️  🔥 💬 </h1>
        <SignOut />
        </header>
        <section>
            {user? <ChatRoom/> :<SignIn/>}
        </section>
      </div>
    </>
  );
}

function SignIn() {
  const signInwithGoogle = () => {
   const provider = new GoogleAuthProvider();
   signInWithPopup(auth, provider).then((data) => {
       console.log(data)
   }).catch((error) => {console.error(error)})
  };
  return <> <button onClick={signInwithGoogle}> Sign in with Google</button> <p>Do not violate the community guidelines or you will be banned for life!</p> </>;
}


function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }

function ChatRoom(params) {
   const messageRef = collection(db,'messages');
    return( 

        <div>Chat Room</div>
    );
}