import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from "@clerk/clerk-react"
import './index.css'
import App from './App'

const PUBLISHABLE_KEY = "pk_test_b3JnYW5pYy1odXNreS02NS5jbGVyay5hY2NvdW50cy5kZXYk"

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>
)
