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

interface CryptoData {
  name: string
  symbol: string
  marketCap: string
  website: string
  icon: React.ComponentType<{ size?: number }>
}

function CryptoAbout() {
  const cryptoData: CryptoData[] = [
    { name: 'Bitcoin', symbol: 'BTC', marketCap: '~$1.8 T USD', website: 'https://bitcoin.org', icon: TokenBTC },
    { name: 'Ethereum', symbol: 'ETH', marketCap: '~$380 B USD', website: 'https://ethereum.org', icon: TokenETH },
    { name: 'Tether', symbol: 'USDT', marketCap: '~$187 B USD', website: 'https://tether.to', icon: TokenUSDT },
    { name: 'Binance Coin', symbol: 'BNB', marketCap: '~$121 B USD', website: 'https://www.binance.com', icon: TokenBNB },
    { name: 'Solana', symbol: 'SOL', marketCap: '~$76 B USD', website: 'https://solana.com', icon: TokenSOL },
    { name: 'Cardano', symbol: 'ADA', marketCap: '~$14 B USD', website: 'https://cardano.org', icon: TokenADA },
    { name: 'Dogecoin', symbol: 'DOGE', marketCap: '~$24 B USD', website: 'https://dogecoin.com', icon: TokenDOGE },
    { name: 'Polygon', symbol: 'MATIC', marketCap: '(not in top 12 live list; estimated lower cap)', website: 'https://polygon.technology', icon: TokenMATIC },
    { name: 'Avalanche', symbol: 'AVAX', marketCap: '(not in top 12 live list; estimated lower cap)', website: 'https://www.avax.network', icon: TokenAVAX },
    { name: 'Chainlink', symbol: 'LINK', marketCap: '~$9.3 B USD', website: 'https://chain.link', icon: TokenLINK },
    { name: 'Litecoin', symbol: 'LTC', marketCap: '~$6.2 B USD', website: 'https://litecoin.org', icon: TokenLTC },
    { name: 'Uniswap', symbol: 'UNI', marketCap: '~$3.5 B USD', website: 'https://uniswap.org', icon: TokenUNI },
    { name: 'Cosmos', symbol: 'ATOM', marketCap: '(not in top 12 live list; estimated lower cap)', website: 'https://cosmos.network', icon: TokenATOM },
    { name: 'Polkadot', symbol: 'DOT', marketCap: '~$3.5 B USD (approx per other sources)', website: 'https://polkadot.network', icon: TokenDOT },
    { name: 'Bitcoin Cash', symbol: 'BCH', marketCap: '~$12.6 B USD', website: 'https://bitcoincash.org', icon: TokenBCH },
    { name: 'Bitcoin SV', symbol: 'BSV', marketCap: '(not in top 12 live list; estimated lower cap)', website: 'https://bitcoinsv.com', icon: TokenBSV }
  ]

  return (
    <div style={{ padding: '20px', width: '100vw', height: '100vh', margin: '0', boxSizing: 'border-box' }}>
      <h2>Cryptocurrency Market Information</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Token</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Symbol</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Approx. Market Cap (USD)</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Main Website</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((crypto) => (
              <tr key={crypto.symbol} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <crypto.icon size={24} />
                  {crypto.name}
                </td>
                <td style={{ padding: '12px', fontWeight: '500' }}>{crypto.symbol}</td>
                <td style={{ padding: '12px' }}>{crypto.marketCap}</td>
                <td style={{ padding: '12px' }}>
                  <a href={crypto.website} target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none' }}>
                    {crypto.website}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CryptoAbout