import { Navbar, Favounav, Footer, Login, Signup } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div class="flex flex-col h-screen justify-between">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Favounav />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}