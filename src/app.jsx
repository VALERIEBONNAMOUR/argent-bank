import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import SignIn from './pages/Login/Login.jsx';
import Header from './components/Header/Header';
import './Style.css';
import './pages/Login/Login.css';
import Error from './pages/Error/Error.jsx';


function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
           <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
