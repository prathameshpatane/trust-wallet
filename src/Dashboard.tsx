import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-hero">
        <h1>Buy and sell crypto</h1>
        <p>Go from cash to crypto in seconds.</p>
      </div>
      
      <div className="dashboard-features">
        <div className="feature-card">
          <div className="feature-icon">💳</div>
          <h3>Buy</h3>
          <p>Buy crypto in under five minutes</p>
          <Link to="/buy" className="feature-btn">Buy</Link>
          
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🔄</div>
          <h3>Swap and bridge tokens</h3>
          <p>Easily swap thousands of tokens across dozens of networks.</p>
          <button className="feature-btn">Swap</button>
          
        </div>
        
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