import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add signup logic here
    navigate('/')
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Sign Up</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit" className="btn primary full-width">Sign Up</button>
          <p className="auth-switch">Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signup
