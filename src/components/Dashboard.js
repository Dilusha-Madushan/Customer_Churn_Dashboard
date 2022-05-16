import React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Home from "./pages/Home"
import Summarizer from "./pages/Summarizer"
import Predict from "./pages/Predict"
import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import { Col, Row } from "reactstrap";


export default function Dashboard() {
  

  return (
    <>
        <Row>
            <Col>
              <Header></Header>
            </Col>
        </Row>
        <div>
            <Sidebar />
            <Routes>
                        <Route
                            exact="true"
                            caseSensitive={false}
                            path="/"
                            element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                            }
                        />
                        <Route
                            caseSensitive={false}
                            path="/home"
                            element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                            }
                        />
                        <Route
                            caseSensitive={false}
                            path="/summarizer"
                            element={
                            <PrivateRoute>
                                <Summarizer />
                            </PrivateRoute>
                            }
                        />
                        <Route
                           caseSensitive={false}
                            path="/predict"
                            element={
                            <PrivateRoute>
                                <Predict />
                            </PrivateRoute>
                            }
                        />
            </Routes>
            
        </div>
                        
    </>
  );
    
      
}
