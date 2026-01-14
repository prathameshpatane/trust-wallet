import './App.css'

function NFTs() {
  return (
    <div className="nfts-page">
      <section className="nfts-hero">
        <div className="nfts-hero-content">
          <div className="nfts-hero-text">
            <h1>Explore the world of NFTs</h1>
            <p className="lead">Unlock unique experiences, own digital art, access exclusive memberships, and so much more with your NFTs.</p>
            <button className="btn primary">Get Started</button>
          </div>
          <div className="nfts-hero-visual">
            <div className="nft-showcase">
              <div className="nft-card featured">
                <div className="nft-image">🎨</div>
                <div className="nft-info">
                  <h4>Digital Art</h4>
                  <p>0.5 ETH</p>
                </div>
              </div>
              <div className="nft-card">
                <div className="nft-image">🎮</div>
                <div className="nft-info">
                  <h4>Gaming NFT</h4>
                  <p>0.3 ETH</p>
                </div>
              </div>
              <div className="nft-card">
                <div className="nft-image">🎵</div>
                <div className="nft-info">
                  <h4>Music NFT</h4>
                  <p>0.8 ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nfts-support">
        <div className="section-inner">
          <div className="nfts-support-content">
            <div className="support-visual">
              <div className="blockchain-icons">
                <div className="blockchain-icon">⟠</div>
                <div className="blockchain-icon">◎</div>
                <div className="blockchain-icon">🔷</div>
                <div className="blockchain-icon">⬢</div>
              </div>
              <div className="nft-count-display">
                <span className="count-number">600M+</span>
                <span className="count-label">NFTs Supported</span>
              </div>
            </div>
            <div className="support-text">
              <h2>Support for 600M+ NFTs means no more app switching</h2>
              <p>Enjoy all your NFTs in one place. Store, showcase, and manage your NFTs across multiple blockchains.</p>
              <button className="btn secondary">Manage NFTs</button>
            </div>
          </div>
        </div>
      </section>

      <section className="nfts-marketplaces">
        <div className="section-inner">
          <h2>Access popular NFT marketplaces</h2>
          <p>Never miss out on the next big thing. LockChain Wallet is your secure gateway to connect to top NFT marketplaces.</p>
          
          <div className="marketplaces-grid">
            <div className="marketplace-item">
              <div className="marketplace-logo">🌊</div>
              <h4>OpenSea</h4>
              <p>The largest NFT marketplace</p>
            </div>
            <div className="marketplace-item">
              <div className="marketplace-logo">🎭</div>
              <h4>Rarible</h4>
              <p>Create, buy and sell NFTs</p>
            </div>
            <div className="marketplace-item">
              <div className="marketplace-logo">☀️</div>
              <h4>Solanart</h4>
              <p>Solana's premier NFT marketplace</p>
            </div>
            <div className="marketplace-item">
              <div className="marketplace-logo">⚔️</div>
              <h4>Axie Infinity</h4>
              <p>Play-to-earn gaming NFTs</p>
            </div>
          </div>
          
          <button className="btn secondary">Discover More</button>
        </div>
      </section>

      <section className="nfts-manage">
        <div className="section-inner">
          <div className="manage-content">
            <div className="manage-visual">
              <div className="wallet-mockup">
                <div className="wallet-header">
                  <div className="wallet-title">My NFTs</div>
                  <div className="wallet-count">24 items</div>
                </div>
                <div className="nft-grid-preview">
                  <div className="nft-preview">🖼️</div>
                  <div className="nft-preview">🎨</div>
                  <div className="nft-preview">🎮</div>
                  <div className="nft-preview">🎵</div>
                </div>
              </div>
            </div>
            <div className="manage-text">
              <h2>Deposit, manage and explore</h2>
              <p>LockChain Wallet offers you an easy way to keep all your favourite NFTs in one place.</p>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-icon">📱</span>
                  <span>Mobile-first experience</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔒</span>
                  <span>Secure storage</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌐</span>
                  <span>Multi-chain support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nfts-future">
        <div className="section-inner">
          <div className="future-visual">
            <div className="digital-art-gallery">
              <div className="gallery-frame">
                <div className="art-piece">🎨</div>
              </div>
              <div className="gallery-frame">
                <div className="art-piece">🖼️</div>
              </div>
              <div className="gallery-frame">
                <div className="art-piece">🎭</div>
              </div>
            </div>
          </div>
          <h2>Step into the future of digital ownership</h2>
          <p>Wherever your unique NFT experiences take you, we're here to make your journey seamless, secure, and exciting.</p>
          <button className="btn primary">Get started with NFTs</button>
        </div>
      </section>

      <section className="nfts-trusted">
        <div className="section-inner">
          <div className="trusted-stats">
            <div className="stat-item">
              <div className="stat-number">200M+</div>
              <div className="stat-label">Trusted Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">600M+</div>
              <div className="stat-label">NFTs Supported</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">70+</div>
              <div className="stat-label">Blockchains</div>
            </div>
          </div>
          <h2>Trusted by 200M people</h2>
          <p>We make it simpler, safer, and convenient for millions of people around the world to buy, sell, and store crypto, earn rewards, manage their NFTs, access dApps securely, and experience Web3, all in one place.</p>
        </div>
      </section>
    </div>
  )
}

export default NFTs