import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/home/Home';
import Layout from './pages/layout/Layout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Blog from './pages/blog/page';
import BlogDetails from "./pages/blog/BlogDetails";


export default function App({ postList, onLogin}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.loggedInUser;
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home user={user} postList={postList} />} />
            <Route path="/giris" element={<Login />} />
            <Route path="/kayit" element={<Register />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails user={user} onLogin={onLogin} />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}