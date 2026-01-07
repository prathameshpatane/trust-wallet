import { Link } from 'react-router-dom'
import { useState } from 'react'
import type { ElementType } from 'react'
import './Buy.css'

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
  TokenLINK,
  TokenLTC,
  TokenUNI,
  TokenATOM,
  TokenDOT,
  TokenBCH,
  TokenBSV
} from '@web3icons/react'

interface CryptoBalance {
  symbol: string
  name: string
  network: string
  icon: ElementType
  balance: string
  usdValue: string
}

function Sell() {
  const [amount, setAmount] = useState('0.5')
  const [selectedCrypto, setSelectedCrypto] = useState('ETH')

  const cryptoBalances: CryptoBalance[] = [
    { symbol: 'ETH', name: 'Ethereum', network: 'Ethereum Mainnet', icon: TokenETH, balance: '2.5', usdValue: '4,250' },
    { symbol: 'BTC', name: 'Bitcoin', network: 'Bitcoin Network', icon: TokenBTC, balance: '0.1', usdValue: '4,300' },
    { symbol: 'USDT', name: 'Tether', network: 'Ethereum', icon: TokenUSDT, balance: '1,000', usdValue: '1,000' },
    { symbol: 'BNB', name: 'BNB', network: 'BNB Chain', icon: TokenBNB, balance: '5.2', usdValue: '1,560' },
    { symbol: 'SOL', name: 'Solana', network: 'Solana Network', icon: TokenSOL, balance: '15.8', usdValue: '1,264' },
    { symbol: 'ADA', name: 'Cardano', network: 'Cardano Network', icon: TokenADA, balance: '500', usdValue: '200' },
  ]

  const currentCrypto = cryptoBalances.find(
    crypto => crypto.symbol === selectedCrypto
  )

  return (
    <div className="buy-interface">
      <div className="buy-content">
        <div className="buy-header">
          <Link to="/dashboard" className="back-btn">←</Link>
          <h2>Sell</h2>
        </div>

        <div className="search-section">
          <input
            type="text"
            placeholder="Search for a token..."
            className="token-search"
          />
        </div>

        <div className="buy-sell-tabs">
          <Link to="/buy" className="tab">Buy</Link>
          <button className="tab active">Sell</button>
        </div>

        <div className="wallet-section">
          <div className="wallet-icon">💰</div>
          <span>Available Balance: ${currentCrypto?.usdValue || '0'}</span>
        </div>

        <div className="currency-section">
          <div className="currency-row">
            <select
              value={selectedCrypto}
              onChange={(e) => setSelectedCrypto(e.target.value)}
              className="crypto-select-dropdown"
            >
              {cryptoBalances.map((crypto, index) => (
                <option
                  key={`${crypto.symbol}-${index}`}
                  value={crypto.symbol}
                >
                  {crypto.symbol} - {crypto.balance} ({crypto.name})
                </option>
              ))}
            </select>

            <div className="crypto-info">
              {currentCrypto && <currentCrypto.icon size={24} />}
              <span>{currentCrypto?.name}</span>
              <small>Balance: {currentCrypto?.balance} {currentCrypto?.symbol}</small>
            </div>
          </div>

          <div className="currency-row">
            <span className="flag">🇺🇸</span>
            <span className="currency">USD</span>
            <input
              type="text"
              value={`$${amount}`}
              onChange={(e) =>
                setAmount(e.target.value.replace('$', ''))
              }
              className="amount-input"
            />
          </div>
        </div>

        <div className="payment-section">
          <span>Bank Transfer</span>
          <button className="change-btn">Change</button>
        </div>

        <div className="payment-methods">
          <span>🏦</span><span>💳</span><span>📱</span>
        </div>

        <button className="connect-wallet-btn">
          Sell
        </button>
      </div>
    </div>
  )
}

export default Sell