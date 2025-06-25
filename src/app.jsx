import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from '../src/pages/Home';
import SignIn from '../src/pages/SignIn';
import Header from './components/Header/Header';


function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
