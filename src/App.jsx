import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './pages/layout/layout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Blog from './pages/blog';


export default function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/giris" element={<Login />} />
            <Route path="/kayit" element={<Register />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}