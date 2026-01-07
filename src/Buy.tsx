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

interface CryptoOption {
  symbol: string
  name: string
  network: string
  icon: ElementType
}

function Buy() {
  const [amount, setAmount] = useState('4,515')
  const [selectedCrypto, setSelectedCrypto] = useState('ETH')

  const cryptoOptions: CryptoOption[] = [
    { symbol: 'ETH', name: 'Ethereum', network: 'Ethereum Mainnet', icon: TokenETH },
    { symbol: 'BTC', name: 'Bitcoin', network: 'Bitcoin Network', icon: TokenBTC },
    { symbol: 'BTC', name: 'Bitcoin', network: 'Lightning Network', icon: TokenBTC },
    { symbol: 'BCH', name: 'Bitcoin Cash', network: 'Bitcoin Cash Network', icon: TokenBCH },
    { symbol: 'BSV', name: 'Bitcoin SV', network: 'Bitcoin SV Network', icon: TokenBSV },
    { symbol: 'USDT', name: 'Tether', network: 'Ethereum', icon: TokenUSDT },
    { symbol: 'BNB', name: 'BNB', network: 'BNB Chain', icon: TokenBNB },
    { symbol: 'SOL', name: 'Solana', network: 'Solana Network', icon: TokenSOL },
    { symbol: 'ADA', name: 'Cardano', network: 'Cardano Network', icon: TokenADA },
    { symbol: 'DOGE', name: 'Dogecoin', network: 'Dogecoin Network', icon: TokenDOGE },
    { symbol: 'MATIC', name: 'Polygon', network: 'Polygon Network', icon: TokenMATIC },
    { symbol: 'AVAX', name: 'Avalanche', network: 'Avalanche C-Chain', icon: TokenAVAX },
    { symbol: 'LINK', name: 'Chainlink', network: 'Ethereum', icon: TokenLINK },
    { symbol: 'LTC', name: 'Litecoin', network: 'Litecoin Network', icon: TokenLTC },
    { symbol: 'UNI', name: 'Uniswap', network: 'Ethereum', icon: TokenUNI },
    { symbol: 'ATOM', name: 'Cosmos', network: 'Cosmos Hub', icon: TokenATOM },
    { symbol: 'DOT', name: 'Polkadot', network: 'Polkadot Network', icon: TokenDOT },
   
  ]

  const currentCrypto = cryptoOptions.find(
    crypto => crypto.symbol === selectedCrypto
  )

  return (
    <div className="buy-interface">
      <div className="buy-content">
        <div className="buy-header">
          <Link to="/dashboard" className="back-btn">←</Link>
          <h2>Buy</h2>
        </div>

        <div className="search-section">
          <input
            type="text"
            placeholder="Search for a token..."
            className="token-search"
          />
        </div>

        <div className="buy-sell-tabs">
          <button className="tab active">Buy</button>
          <Link to="/sell" className="tab">Sell</Link>
        </div>

        <div className="wallet-section">
          <div className="wallet-icon">🎭</div>
          <span>Connect an account</span>
        </div>

        <div className="currency-section">
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

          <div className="currency-row">
            <select
              value={selectedCrypto}
              onChange={(e) => setSelectedCrypto(e.target.value)}
              className="crypto-select-dropdown"
            >
              {cryptoOptions.map((crypto, index) => (
                <option
                  key={`${crypto.symbol}-${index}`}
                  value={crypto.symbol}
                >
                  {crypto.symbol} - {crypto.name} ({crypto.network})
                </option>
              ))}
            </select>

            <div className="crypto-info">
              {currentCrypto && <currentCrypto.icon size={24} />}
              <span>{currentCrypto?.name}</span>
              <small>{currentCrypto?.network}</small>
            </div>
          </div>
        </div>

        <div className="payment-section">
          <span>IMPS</span>
          <button className="change-btn">Change</button>
        </div>

        <div className="payment-methods">
          <span>💳</span>
        </div>

        <button className="connect-wallet-btn">
          Buy
        </button>
      </div>
    </div>
  )
}

export default Buy
