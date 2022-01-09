import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Private from './hoc'
import Layout from './components/Layout'

const App = () => (
  <Layout>
    <Routes>
      <Route
        path="/"
        element={
          <Private>
            <Main />
          </Private>
          }
      />
      <Route path="/login" element={ <Login /> } />
    </Routes>
  </Layout>
  )

export default App
