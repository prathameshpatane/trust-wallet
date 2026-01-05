import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add login logic here
    navigate('/')
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn primary full-width">Login</button>
          <p className="auth-switch">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login
