import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  TokenETH,
  TokenBTC,
  TokenUSDT,
  TokenBNB,
  TokenSOL,
  TokenADA,
  TokenDOGE,
  TokenMATIC,
  TokenAVAX,
  TokenLINK
} from '@web3icons/react'

interface CryptoHolding {
  name: string
  symbol: string
  icon: React.ComponentType<{ size?: number }>
  amountHeld: number
  currentPrice: number
  change24h: number
  profitLoss: number
}

function ManageCrypto() {
  const [activeTab, setActiveTab] = useState('holdings')
  const location = useLocation()

  const holdings: CryptoHolding[] = [
    { name: 'Bitcoin', symbol: 'BTC', icon: TokenBTC, amountHeld: 0.5, currentPrice: 94250, change24h: 2.5, profitLoss: 1200 },
    { name: 'Ethereum', symbol: 'ETH', icon: TokenETH, amountHeld: 2.3, currentPrice: 3420, change24h: -1.2, profitLoss: -150 },
    { name: 'Tether', symbol: 'USDT', icon: TokenUSDT, amountHeld: 1000, currentPrice: 1.00, change24h: 0.1, profitLoss: 5 },
    { name: 'Binance Coin', symbol: 'BNB', icon: TokenBNB, amountHeld: 5, currentPrice: 720, change24h: 3.8, profitLoss: 180 },
    { name: 'Solana', symbol: 'SOL', icon: TokenSOL, amountHeld: 15, currentPrice: 245, change24h: -2.1, profitLoss: -75 },
    { name: 'Cardano', symbol: 'ADA', icon: TokenADA, amountHeld: 500, currentPrice: 1.15, change24h: 1.8, profitLoss: 25 },
    { name: 'Dogecoin', symbol: 'DOGE', icon: TokenDOGE, amountHeld: 2000, currentPrice: 0.42, change24h: 5.2, profitLoss: 40 },
    { name: 'Polygon', symbol: 'MATIC', icon: TokenMATIC, amountHeld: 800, currentPrice: 0.95, change24h: -0.8, profitLoss: -12 },
    { name: 'Avalanche', symbol: 'AVAX', icon: TokenAVAX, amountHeld: 25, currentPrice: 52, change24h: 4.1, profitLoss: 65 },
    { name: 'Chainlink', symbol: 'LINK', icon: TokenLINK, amountHeld: 100, currentPrice: 28.5, change24h: -1.5, profitLoss: -30 }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'holdings':
        return (
          <div className="tab-content">
            <h2>Your Holdings</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Coin</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Amount Held</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Current Price</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Total Value</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>24h Change (%)</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Profit / Loss</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Status</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {holdings.map((crypto) => {
                    const totalValue = crypto.amountHeld * crypto.currentPrice
                    const isGainer = crypto.change24h > 0
                    const isProfitable = crypto.profitLoss > 0
                    
                    return (
                      <tr key={crypto.symbol} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <crypto.icon size={24} />
                          <div>
                            <div style={{ fontWeight: '500' }}>{crypto.name}</div>
                            <div style={{ fontSize: '12px', color: '#666' }}>{crypto.symbol}</div>
                          </div>
                        </td>
                        <td style={{ padding: '12px' }}>{crypto.amountHeld.toLocaleString()}</td>
                        <td style={{ padding: '12px' }}>${crypto.currentPrice.toLocaleString()}</td>
                        <td style={{ padding: '12px', fontWeight: '500' }}>${totalValue.toLocaleString()}</td>
                        <td style={{ 
                          padding: '12px', 
                          color: isGainer ? '#22c55e' : '#ef4444',
                          fontWeight: '500'
                        }}>
                          {isGainer ? '+' : ''}{crypto.change24h}%
                        </td>
                        <td style={{ 
                          padding: '12px', 
                          color: isProfitable ? '#22c55e' : '#ef4444',
                          fontWeight: '500'
                        }}>
                          {isProfitable ? '+' : ''}${crypto.profitLoss}
                        </td>
                        <td style={{ padding: '12px' }}>
                          <span style={{
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: '500',
                            backgroundColor: isGainer ? '#dcfce7' : '#fee2e2',
                            color: isGainer ? '#166534' : '#991b1b'
                          }}>
                            {isGainer ? 'Gainer' : 'Loser'}
                          </span>
                        </td>
                        <td style={{ padding: '12px' }}>
                          <div style={{ display: 'flex', gap: '8px' }}>
                            <Link to="/buy" style={{
                              padding: '4px 8px',
                              fontSize: '12px',
                              border: '1px solid #22c55e',
                              backgroundColor: '#22c55e',
                              color: 'white',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              textDecoration: 'none',
                              display: 'inline-block'
                            }}>
                              Buy
                            </Link>
                            <Link to="/sell" style={{
                              padding: '4px 8px',
                              fontSize: '12px',
                              border: '1px solid #ef4444',
                              backgroundColor: '#ef4444',
                              color: 'white',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              textDecoration: 'none',
                              display: 'inline-block'
                            }}>
                              Sell
                            </Link>
                            <button style={{
                              padding: '4px 8px',
                              fontSize: '12px',
                              border: '1px solid #3b82f6',
                              backgroundColor: '#3b82f6',
                              color: 'white',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }}>
                              Swap
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )
      case 'history':
        return (
          <div className="tab-content">
            <h2>Transaction History</h2>
            <p>View your past transactions and trading history</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="manage-crypto-page">
      <nav className="crypto-nav">
        <button 
          className={`nav-tab ${activeTab === 'holdings' ? 'active' : ''}`}
          onClick={() => setActiveTab('holdings')}
        >
          Holdings
        </button>
        <button 
          className={`nav-tab ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          History
        </button>
        <Link 
          to="/manage-crypto/about"
          className={`nav-tab ${location.pathname === '/manage-crypto/about' ? 'active' : ''}`}
        >
          About
        </Link>
      </nav>
      
      {renderContent()}
    </div>
  )
}

export default ManageCrypto