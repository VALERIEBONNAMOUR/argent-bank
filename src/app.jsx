import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import SignIn from './pages/Login/Login.jsx';
import Header from './components/Header/Header';
import './Style.css';
import './pages/Login/Login.css';
import Error from './pages/Error/Error.jsx';
import Profile from './pages/Profile/Profile.jsx';


function App() {

   const token = useSelector((state) => state.user.token);
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
           <Route 
                    path="/profile" 
                    element={token ? <Profile /> : <Navigate to="/login" />} 
                />
           <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
