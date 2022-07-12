import { Navbar, Footer, Login, Signup, PrivateRoute, Dashboard, Store } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div class="flex flex-col h-screen justify-between">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/store" element={<Store />} />
          <Route path="/" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}