//I am not using this entire code on this file but still added it for practice purposes
'use client'; 

import React, { useEffect } from 'react';
import { useUserAuth } from '../_utils/auth-context'; // Update the import path if needed
import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/review-form'); // Redirect to review form page if user is already logged in
    }
  }, [user, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-6">
      <h1 className="text-5xl font-bold mb-6 text-pink-600">Welcome to Makeup Reviews!</h1>
      {!user ? (
        <>
          <p className="text-lg mb-8 text-gray-700">To review our makeup products, please log in.</p>
          <button
            onClick={gitHubSignIn}
            className="bg-pink-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            Login with GitHub
          </button>
        </>
      ) : (
        <>
          <p className="text-lg mb-8 text-gray-700">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={firebaseSignOut}
            className="bg-pink-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  );
};

export default LandingPage;
