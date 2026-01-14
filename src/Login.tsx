import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if (userCredential && userCredential.user) {
        navigate('/dashboard')
      }
    } catch (err: any) {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
         <p className="trust-text">
    LOCKCHAIN
    </p>

        <h2>Login</h2>
        {error && <p className="error-text">{error}</p>}
        <form className="auth-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn primary full-width">Login</button>
          <p className="auth-switch">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login
