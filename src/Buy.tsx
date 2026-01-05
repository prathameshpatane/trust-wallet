import { Link } from 'react-router-dom'
import { useState } from 'react'

// ✅ Web3 Icons (STATIC, tree-shakable)
import {
  TokenETH,
  TokenBTC,
  TokenMATIC,
  TokenBNB,
  NetworkEthereum,
  NetworkBinanceSmartChain,
  NetworkPolygon
} from '@web3icons/react'

type Coin = {
  id: string
  name: string
  network: string
  tokenIcon: JSX.Element
  networkIcon: JSX.Element
}

const coins: Coin[] = [
  {
    id: 'eth',
    name: 'Ethereum',
    network: 'Ethereum Mainnet',
    tokenIcon: <TokenETH size={28} variant="branded" />,
    networkIcon: <NetworkEthereum size={14} variant="mono" />
  },
  {
    id: 'btc',
    name: 'Bitcoin',
    network: 'Bitcoin Network',
    tokenIcon: <TokenBTC size={28} variant="branded" />,
    networkIcon: <span style={{ fontSize: 12 }}>BTC</span>
  },
  {
    id: 'matic',
    name: 'Polygon',
    network: 'Polygon Mainnet',
    tokenIcon: <TokenMATIC size={28} variant="branded" />,
    networkIcon: <NetworkPolygon size={14} variant="mono" />
  },
  {
    id: 'bnb',
    name: 'BNB',
    network: 'BNB Smart Chain',
    tokenIcon: <TokenBNB size={28} variant="branded" />,
    networkIcon: <NetworkBinanceSmartChain size={14} variant="mono" />
  }
]

function Buy() {
  const [amount, setAmount] = useState('4515')
  const [selectedCoin, setSelectedCoin] = useState<Coin>(coins[0])
  const [open, setOpen] = useState(false)

  return (
    <div className="buy-interface">
      {/* Header */}
      <div className="buy-header">
        <Link to="/dashboard" className="back-btn">←</Link>
        <h2>Buy</h2>
      </div>

      {/* Search */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search for a token..."
          className="token-search"
        />
      </div>

      {/* Tabs */}
      <div className="buy-sell-tabs">
        <button className="tab active">Buy</button>
        <button className="tab">Sell</button>
      </div>

      {/* Wallet */}
      <div className="wallet-section">
        <div className="wallet-icon">🎭</div>
        <span>Connect an account</span>
      </div>

      {/* Currency */}
      <div className="currency-section">
        {/* INR */}
        <div className="currency-row">
          <span className="flag">🇮🇳</span>
          <span className="currency">INR</span>
          <input
            type="text"
            value={`₹${amount}`}
            onChange={(e) =>
              setAmount(e.target.value.replace(/[₹,]/g, ''))
            }
            className="amount-input"
          />
        </div>

        {/* CRYPTO DROPDOWN */}
        <div className="crypto-wrapper">
          <div
            className="currency-row crypto-dropdown"
            onClick={() => setOpen(!open)}
          >
            <div className="crypto-icon">
              {selectedCoin.tokenIcon}
            </div>

            <div className="crypto-info">
              <span>{selectedCoin.name}</span>
              <small>
                {selectedCoin.network}
                <span className="network-icon">
                  {selectedCoin.networkIcon}
                </span>
              </small>
            </div>

            <span className="dropdown-arrow">▼</span>
          </div>

          {open && (
            <div className="dropdown-menu">
              {coins.map((coin) => (
                <div
                  key={coin.id}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedCoin(coin)
                    setOpen(false)
                  }}
                >
                  {coin.tokenIcon}
                  <div>
                    <span>{coin.name}</span>
                    <small>{coin.network}</small>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Payment */}
      <div className="payment-section">
        <span>IMPS</span>
        <button className="change-btn">Change</button>
      </div>

      {/* Payment Icons */}
      <div className="payment-methods">
        <span>💳</span>
        <span>💳</span>
        <span>💳</span>
        <span>💳</span>
      </div>

      {/* CTA */}
      <button className="connect-wallet-btn">
        Connect wallet
      </button>
    </div>
  )
}

export default Buy
