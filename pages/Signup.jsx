import { useState } from 'react';
import { supabase } from '../src/supabaseClient';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert('Signup successful! Please sign in.');
      navigate('/signin');
    }
  };

  /* STYLES (MATCH SIGNIN) */
  const page = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #0a0a0a, #1a1a2e)',
    fontFamily: '"Outfit", sans-serif',
    color: '#fff',
  };

  const card = {
    width: '380px',
    padding: '40px',
    borderRadius: '20px',
    background: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.2)',
    textAlign: 'center',
  };

  const input = {
    width: '100%',
    padding: '12px',
    marginBottom: '18px',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
  };

  const button = {
    width: '100%',
    padding: '12px',
    borderRadius: '30px',
    border: '1px solid rgba(255,255,255,0.4)',
    background: 'transparent',
    color: '#fff',
    cursor: 'pointer',
    letterSpacing: '1px',
  };

  const link = {
    marginTop: '20px',
    fontSize: '14px',
    color: '#00d4ff',
    cursor: 'pointer',
  };

  return (
    <div style={page}>
      <form style={card} onSubmit={handleSignup}>
        <h2 style={{ marginBottom: '30px', letterSpacing: '3px' }}>
          SIGN UP
        </h2>

        <input
          style={input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          style={input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button style={button} type="submit" disabled={loading}>
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>

        <p style={link} onClick={() => navigate('/signin')}>
          Already have an account? Sign In
        </p>
      </form>
    </div>
  );
}

export default Signup;
