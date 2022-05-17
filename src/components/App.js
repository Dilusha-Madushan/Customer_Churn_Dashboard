import React from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"

function App() {
  return (
    <div style={{background: "#ffff00"  , height: "100vh"}}>
      <Router>
          <AuthProvider>
            <Routes >
              <Route
                exact="true"
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route path="/login" caseSensitive={false} element={<Login />} />
              <Route path="/forgot-password" caseSensitive={false} element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
    </div>
    
  )
}

export default App
