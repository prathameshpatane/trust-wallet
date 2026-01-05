import './App.css'

function Staking() {
  return (
    <div className="staking-page">
      <div className="staking-layout">
      <section className="staking-hero">
        <h1>Stake your crypto & earn rewards in just a few steps</h1>
        <p className="lead">By staking your crypto, you're not just growing your portfolio, but also helping secure blockchain networks for everyone.</p>
        <button className="btn primary">Download Now</button>
      </section>

      <section className="earning-estimator">
        <h2>Earning Estimator</h2>
        <p>Potential earnings from current APR*</p>
        
        <div className="estimator-card">
          <div className="crypto-selector">
            <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="Ethereum" width="24" height="24" />
            <span>Ethereum</span>
            <span className="apr">3%</span>
          </div>
          
          <div className="amount-input">
            <input type="number" defaultValue="100" />
          </div>
          
          <div className="earnings-grid">
            <div className="earning-item">
              <h4>Daily Earnings</h4>
              <p>+ 0.00714796 ETH</p>
            </div>
            <div className="earning-item">
              <h4>Monthly Earnings</h4>
              <p>+ 0.21764578 ETH</p>
            </div>
            <div className="earning-item">
              <h4>Yearly Earnings</h4>
              <p>+ 2.6432413 ETH</p>
            </div>
          </div>
          
          <button className="btn primary">Earn Now</button>
        </div>
      </section>

      <section className="staking-options">
        <h2>25+ in-wallet staking options*</h2>
        
        <div className="staking-grid">
          <div className="staking-item">
            <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="Ethereum" width="32" height="32" />
            <div>
              <h4>Ethereum</h4>
              <span className="apr">APR 2.64%</span>
            </div>
          </div>
          <div className="staking-item">
            <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana" width="32" height="32" />
            <div>
              <h4>Solana</h4>
              <span className="apr">APR 6.61%</span>
            </div>
          </div>
          <div className="staking-item">
            <img src="https://cryptologos.cc/logos/tron-trx-logo.png" alt="Tron" width="32" height="32" />
            <div>
              <h4>Tron</h4>
              <span className="apr">APR 4.07%</span>
            </div>
          </div>
          <div className="staking-item">
            <img src="https://cryptologos.cc/logos/polkadot-new-dot-logo.png" alt="Polkadot" width="32" height="32" />
            <div>
              <h4>Polkadot</h4>
              <span className="apr">APR 14.90%</span>
            </div>
          </div>
          <div className="staking-item">
            <img src="https://cryptologos.cc/logos/bnb-bnb-logo.png" alt="BNB" width="32" height="32" />
            <div>
              <h4>BNB Smart Chain</h4>
              <span className="apr">APR 0.97%</span>
            </div>
          </div>
          <div className="staking-item">
            <img src="https://cryptologos.cc/logos/cosmos-atom-logo.png" alt="Cosmos" width="32" height="32" />
            <div>
              <h4>Cosmos</h4>
              <span className="apr">APR 15.90%</span>
            </div>
          </div>
          <div className="staking-item">
            <div className="crypto-icon">🔥</div>
            <div>
              <h4>NativeInjective</h4>
              <span className="apr">APR 15.33%</span>
            </div>
          </div>
          <div className="staking-item">
            <div className="crypto-icon">🌐</div>
            <div>
              <h4>NEAR</h4>
              <span className="apr">APR 7.57%</span>
            </div>
          </div>
          <div className="staking-item">
            <div className="crypto-icon">💧</div>
            <div>
              <h4>Sui</h4>
              <span className="apr">APR 1.92%</span>
            </div>
          </div>
          <div className="staking-item">
            <div className="crypto-icon">🌌</div>
            <div>
              <h4>Osmosis</h4>
              <span className="apr">APR 1.36%</span>
            </div>
          </div>
          <div className="staking-item">
            <div className="crypto-icon">🌍</div>
            <div>
              <h4>Terra</h4>
              <span className="apr">APR 15.00%</span>
            </div>
          </div>
          <div className="staking-item">
            <div className="crypto-icon">⚡</div>
            <div>
              <h4>NativeZetaChain</h4>
              <span className="apr">APR 6.10%</span>
            </div>
          </div>
          <div className="staking-item">
            <img src="https://cryptologos.cc/logos/cardano-ada-logo.png" alt="Cardano" width="32" height="32" />
            <div>
              <h4>Cardano</h4>
              <span className="apr">APR 4.69%</span>
            </div>
          </div>
          <div className="staking-item">
            <div className="crypto-icon">🚀</div>
            <div>
              <h4>NativeEvmos</h4>
              <span className="apr">APR 1.50%</span>
            </div>
          </div>
          <div className="staking-item">
            <div className="crypto-icon">⭐</div>
            <div>
              <h4>Stargaze</h4>
              <span className="apr">APR 26.78%</span>
            </div>
          </div>
          <div className="staking-item">
            <div className="crypto-icon">🔗</div>
            <div>
              <h4>CryptoOrg</h4>
              <span className="apr">APR 6.77%</span>
            </div>
          </div>
        </div>
        
        <button className="btn secondary">Earn Now</button>
      </section>

      <section className="staking-info">
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">🔗</div>
            <h3>Contribute to Blockchain</h3>
            <p>Participate in network security and decentralization.</p>
          </div>
          <div className="info-card">
            <div className="info-icon">📖</div>
            <h3>Learn about DeFi</h3>
            <p>Explore more chains and expand your earning journey across DeFi.</p>
          </div>
        </div>
      </section>

      <section className="faq">
        <h2>Frequently asked questions</h2>
        
        <div className="faq-list">
          <div className="faq-item">
            <h4>What is staking?</h4>
          </div>
          <div className="faq-item">
            <h4>What is a validator in staking?</h4>
          </div>
          <div className="faq-item">
            <h4>What's the difference between staking, lending, and yield farming?</h4>
          </div>
          <div className="faq-item">
            <h4>What are the risks involved?</h4>
          </div>
        </div>
      </section>

      </div>
    </div>
  )
}

export default Staking