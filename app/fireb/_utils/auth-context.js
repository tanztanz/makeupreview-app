// app/_utils/auth-context.js

import { createContext, useContext } from 'react';
import { getAuth, signInWithPopup, signOut, GithubAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const router = useRouter();
  const provider = new GithubAuthProvider();

  const gitHubSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push('/review-form'); // Redirect after login
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const firebaseSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/landing'); // Redirect after logout
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const user = auth.currentUser;

  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(AuthContext);
