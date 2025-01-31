import { Routes, Route } from 'react-router-dom'
import { SignedIn, SignedOut, RedirectToSignIn, UserButton } from '@clerk/clerk-react'
import SignInPage from './pages/sign-in'
import SignUpPage from './pages/sign-up'
import './App.css'

function ProtectedPage() {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is only visible to signed in users.</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-in/*" element={<SignInPage />} />
        <Route path="/sign-up/*" element={<SignUpPage />} />
        <Route
          path="/"
          element={
            <>
              <div className="user-button-container">
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
              <SignedIn>
                <div className="main-content">
                  <h1>Welcome to Your App</h1>
                </div>
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App;
