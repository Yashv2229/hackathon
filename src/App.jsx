import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, UserButton } from '@clerk/clerk-react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  const [count, setCount] = useState(0)

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
                <div>
                  <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                  </a>
                  <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                  </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                  <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                  </button>
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
