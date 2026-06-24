import { Routes, Route } from 'react-router'
import AppLayout from './layout/AppLayout'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<HomePage />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
