import './App.css'
import hero from './assets/hero-illustration.svg'

function Home() {
  return (
    <>
      
      <main className="hero">
        <div className="hero-inner">
          <section className="hero-copy">
            <h1>Explore Web3 in your browser</h1>
            <p className="lead">Our Browser Extension is your secure crypto wallet and gateway to thousands of Web3 dApps. Swap tokens, play games, earn rewards, and more.</p>
            <div className="hero-cta">
              <button className="btn cta">Download Extension</button>
            </div>
          </section>

          <aside className="hero-visual" aria-hidden>
            <img src={hero} alt="Illustration of laptop and wallet" />
          </aside>
        </div>
      </main>

      <section className="browser-support">
        <div className="section-inner">
          <h2>The LockChain Wallet Browser Extension works on…</h2>
          <div className="browsers">
            <div className="browser-item">
              <div className="browser-icon">🌐</div>
              <span>Chrome</span>
            </div>
            <div className="browser-item">
              <div className="browser-icon">🦁</div>
              <span>Brave</span>
            </div>
            <div className="browser-item">
              <span>and more...</span>
            </div>
          </div>
        </div>
      </section>

      <section className="blockchains">
        <div className="section-inner">
          <h2>Supported blockchains</h2>
          <p className="section-desc">Explore Web3 dApps across 100+ blockchain networks – with more added regularly.</p>
          <div className="blockchain-grid">
            <div className="blockchain-item"><span className="symbol">₿</span>Bitcoin</div>
            <div className="blockchain-item"><span className="symbol">Ξ</span>Ethereum</div>
            <div className="blockchain-item"><span className="symbol">◆</span>BNB Smart Chain</div>
            <div className="blockchain-item"><span className="symbol">⬟</span>Polygon</div>
            <div className="blockchain-item"><span className="symbol">◎</span>Solana</div>
            <div className="blockchain-item"><span className="symbol">▲</span>Avalanche</div>
            <div className="blockchain-item"><span className="symbol">♦</span>Cardano</div>
            <div className="blockchain-item"><span className="symbol">Ð</span>Dogecoin</div>
            <div className="blockchain-item"><span className="symbol">Ł</span>Litecoin</div>
            <div className="blockchain-item"><span className="symbol">⚡</span>Arbitrum</div>
            <div className="blockchain-item"><span className="symbol">🔴</span>Optimism</div>
            <div className="blockchain-item"><span className="symbol">⭐</span>Base</div>
          </div>
          <button className="btn secondary">View all networks</button>
        </div>
      </section>

      <section className="features">
        <div className="section-inner">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Buy crypto with ease</h3>
              <p>Buy crypto with a debit or credit card, mobile payments, or bank transfers.</p>
              <button className="btn link">Learn More</button>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Earn rewards & build your portfolio</h3>
              <p>Earn rewards, all the way up to 70% APR via trusted providers.</p>
              <button className="btn link">Learn More</button>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Explore & manage NFTs</h3>
              <p>Explore top NFT marketplaces and manage your NFTs securely.</p>
              <button className="btn link">Learn More</button>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Swap crypto safely</h3>
              <p>Swap 10,000+ cryptocurrencies with trusted swap providers.</p>
              <button className="btn link">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-inner">
          <h2>Why LockChain Wallet?</h2>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">🔒</div>
              <h3>Security First</h3>
              <p>Your private keys are encrypted and stored locally on your device. We never have access to your funds.</p>
              <div className="card-highlight">Bank-grade</div>
            </div>
            <div className="about-card">
              <div className="about-icon">🌍</div>
              <h3>Global Access</h3>
              <p>Access thousands of dApps and DeFi protocols across 100+ blockchain networks worldwide.</p>
              <div className="card-highlight">100+ Networks</div>
            </div>
            <div className="about-card">
              <div className="about-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Experience seamless transactions with our optimized infrastructure and smart routing.</p>
              <div className="card-highlight">Instant</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home