import { useState } from 'react'
import './App.css'
import { SignIn, SignUp } from "@clerk/clerk-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn, useAuth } from "@clerk/clerk-react";

function ProtectedPage() {
  const { isSignedIn } = useAuth();
  return isSignedIn ? <h2>Protected Content</h2> : <RedirectToSignIn />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Public Page</h1>} />
        <Route
          path="/protected"
          element={
            <SignedIn>
              <ProtectedPage />
            </SignedIn>
          }
        />
        <Route path="/sign-in" element={<RedirectToSignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
