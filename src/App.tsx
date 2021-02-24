import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, GoogleAuthProvider } from './firebase';
import { List } from './List';
import './App.css';

const App: React.FC<{}> = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Unexpected error</h1>
  }
  if (!user) {
    return (
     <div>
       <h1>You are not logged in!</h1>
       <button onClick={() => {
         auth.signInWithPopup(GoogleAuthProvider).catch();
       }}>Log in</button>
      </div>
    )
  }
  return (
    <div>
      <h1>FirePanda</h1>
      <h3>Hello, {user.displayName}</h3>
      <List />
      <button onClick={() => auth.signOut()}>Log out</button>
    </div>
  );
}

export default App;
