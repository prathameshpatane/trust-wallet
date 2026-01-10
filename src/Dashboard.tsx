import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="dashboard-page">
      <nav className="dashboard-nav">
        <Link to="/manage-crypto" className="nav-item">Manage Crypto</Link>
        <Link to="/watchlist" className="nav-item">Watchlists</Link>
      </nav>
      
      <div className="dashboard-hero">
        <h1>Buy and sell crypto</h1>
        <p>Go from cash to crypto in seconds.</p>
      </div>
      
      <div className="dashboard-features">
        <Link to="/buy" className="feature-card feature-link">
          <div className="feature-icon">💳</div>
          <h3>Buy</h3>
          <p>Buy crypto in under five minutes</p>
          <div className="feature-btn">Buy</div>
        </Link>
        
        <Link to="/receive" className="feature-card feature-link">
          <div className="feature-icon">🔄</div>
          <h3>Receive</h3>
          <p>Transaction to be initiated and broadcast to the network.</p>
          <div className="feature-btn">Receive</div>
        </Link>
        
        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h3>Earn rewards</h3>
          <p>Stake your ETH and earn rewards while securing the Ethereum network.</p>
          <button className="feature-btn">Stake</button>
          
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">💰</div>
          <h3>Spend crypto IRL</h3>
          <p>Use MetaMask Card to make purchases with your crypto anywhere that Mastercard is accepted.</p>
          <button className="feature-btn">Spend</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard