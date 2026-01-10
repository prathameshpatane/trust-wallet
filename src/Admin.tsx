import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Admin() {
  const navigate = useNavigate()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuth')
    if (!isAuthenticated) {
      navigate('/admin/login')
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    navigate('/admin/login')
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Admin Panel</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="admin-grid">
        <div className="admin-card">
          <h3>User Management</h3>
          <p>Total Users: 1,234</p>
          <p>Active Users: 987</p>
          <button className="admin-btn admin-btn-blue">
            Manage Users
          </button>
        </div>

        <div className="admin-card">
          <h3>Transaction Overview</h3>
          <p>Total Transactions: 5,678</p>
          <p>Today's Volume: $2.3M</p>
          <button className="admin-btn admin-btn-green">
            View Transactions
          </button>
        </div>

        <div className="admin-card">
          <h3>System Settings</h3>
          <p>Server Status: Online</p>
          <p>Last Backup: 2 hours ago</p>
          <button className="admin-btn admin-btn-orange">
            System Config
          </button>
        </div>

        <div className="admin-card">
          <h3>Security</h3>
          <p>Failed Login Attempts: 12</p>
          <p>Security Alerts: 0</p>
          <button className="admin-btn admin-btn-red">
            Security Logs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Admin