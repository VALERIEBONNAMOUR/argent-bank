import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/userSlice.jsx';



export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

     try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Identifiants incorrects');
      }

      const data = await response.json();
      const token = data.body.token;

      
      localStorage.setItem('token', token);

      const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!profileResponse.ok) {
        throw new Error('Impossible de récupérer le profil utilisateur');
      }

      const profileData = await profileResponse.json();

      console.log(profileData);
      dispatch(
        login({ 
          userInfo: {
          email: profileData.body.email,
          firstName: profileData.body.firstName,
          lastName: profileData.body.lastName,
          userName: profileData.body.userName,
          }
        })
      );
  
      navigate('/profile');
    } catch (error) {
      setError(error.message || 'Erreur lors de la connexion');
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
       <i className="fas fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
         {error && <p className="error-message">{error}</p>}
      </section>
    </main>
  );
}
