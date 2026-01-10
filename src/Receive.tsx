import { useState } from 'react'
import QRCode from 'react-qr-code'
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
  TokenXRP
} from '@web3icons/react'

interface CryptoReceive {
  name: string
  symbol: string
  icon: React.ComponentType<{ size?: number }>
  address: string
}

function Receive() {
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoReceive | null>(null)

  const cryptoAddresses: CryptoReceive[] = [
    { name: 'Bitcoin', symbol: 'BTC', icon: TokenBTC, address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' },
    { name: 'Ethereum', symbol: 'ETH', icon: TokenETH, address: '0x742d35Cc6634C0532925a3b8D4C9db96c4b4d8b7' },
    { name: 'Tether', symbol: 'USDT', icon: TokenUSDT, address: '0x8ba1f109551bD432803012645Hac136c22C501e' },
    { name: 'Binance Coin', symbol: 'BNB', icon: TokenBNB, address: 'bnb1grpf0955h0ykzq3ar5nmum7y6gdfl6lxfn46h2' },
    { name: 'Solana', symbol: 'SOL', icon: TokenSOL, address: '9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM' },
    { name: 'Cardano', symbol: 'ADA', icon: TokenADA, address: 'addr1qx2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3jcu5d8ps7zex2k2xt3uqxgjqnnj83ws8lhrn648jjxtwq2ytjqp' },
    { name: 'Dogecoin', symbol: 'DOGE', icon: TokenDOGE, address: 'DH5yaieqoZN36fDVciNyRueRGvGLR3mr7L' },
    { name: 'Polygon', symbol: 'MATIC', icon: TokenMATIC, address: '0x0000000000000000000000000000000000001010' },
    { name: 'Avalanche', symbol: 'AVAX', icon: TokenAVAX, address: 'X-avax1x459sj0ssm8d9dcudh8jzwxwu6l5fekv02a8w5' },
    { name: 'Chainlink', symbol: 'LINK', icon: TokenLINK, address: '0x514910771AF9Ca656af840dff83E8264EcF986CA' },
    { name: 'Litecoin', symbol: 'LTC', icon: TokenLTC, address: 'LTC1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4' },
    { name: 'XRP', symbol: 'XRP', icon: TokenXRP, address: 'rN7n7otQDd6FczFgLdSqtcsAUxDkw6fzRH' }
  ]

  const showQR = (crypto: CryptoReceive) => {
    setSelectedCrypto(crypto)
  }

  const closeModal = () => {
    setSelectedCrypto(null)
  }

  return (
    <div className="receive-page">
      <div className="receive-header">
        <h1>Receive Cryptocurrency</h1>
        <p>Select a cryptocurrency to get your receiving address and QR code</p>
      </div>
      
      <div className="crypto-receive-grid">
        {cryptoAddresses.map((crypto) => (
          <div key={crypto.symbol} className="receive-card">
            <div className="crypto-info">
              <crypto.icon size={32} />
              <div>
                <h3>{crypto.name}</h3>
                <span className="crypto-symbol">{crypto.symbol}</span>
              </div>
            </div>
            
            <button 
              className="show-qr-btn"
              onClick={() => showQR(crypto)}
            >
              Show QR
            </button>
          </div>
        ))}
      </div>

      {selectedCrypto && (
        <div className="qr-modal" onClick={closeModal}>
          <div className="qr-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <selectedCrypto.icon size={24} />
              <h3>{selectedCrypto.name} ({selectedCrypto.symbol})</h3>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            
            <div className="qr-section">
              <QRCode value={selectedCrypto.address} size={200} />
            </div>
            
            <div className="address-section">
              <label>Receiving Address:</label>
              <div className="address-display">
                <span>{selectedCrypto.address}</span>
                <button className="copy-btn" onClick={() => navigator.clipboard.writeText(selectedCrypto.address)}>
                  📋
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Receive