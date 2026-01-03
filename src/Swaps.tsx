import './App.css'

function Swaps() {
  return (
    <div className="swaps-page">
      <div className="swaps-hero">
        <div className="swaps-hero-content">
          <h1>Seamless swapping options</h1>
          <p className="swaps-lead">Swap crypto directly from the Trust Wallet mobile app and browser extension.</p>
          <button className="btn primary cta">Download Now</button>
        </div>
      </div>

      <section className="perps-section">
        <div className="section-inner">
          <div className="perps-content">
            <div className="perps-text">
              <h2>Perpetual Contracts</h2>
              <span className="new-badge">NEW: Trade Perps</span>
              <ul className="perps-features">
                <li>Go long or short</li>
                <li>100+ markets (BTC, ETH, BNB, SOL & more)</li>
                <li>Up to 100× leverage</li>
                <li>Self-custody - you hold your keys. <a href="#">Learn more</a></li>
              </ul>
              <button className="btn secondary">Explore Perps</button>
            </div>
          </div>
        </div>
      </section>

      <section className="tutorial-section">
        <div className="section-inner">
          <h2>Swap Tutorial</h2>
          <h3>How it works</h3>
          <div className="tutorial-steps">
            <div className="step">
              <span className="step-number">1</span>
              <p>Select the swap option.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <p>Choose the asset you want to swap.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <p>Type in your swap amount.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <p>Review your swap details and select "Confirm Swap"</p>
            </div>
          </div>
          <button className="btn primary">Download Now</button>
        </div>
      </section>

      <section className="trending-section">
        <div className="section-inner">
          <h2>Swap trending tokens</h2>
          <p>Swap all the latest trending tokens, in one place.</p>
          <div className="trending-icon">💎</div>
          <p className="trending-label">Emeralds</p>
        </div>
      </section>

      <section className="features-section">
        <div className="section-inner">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">⛽</div>
              <h3>Reduced Gas Fees</h3>
              <p>Our Swap feature determines the most gas-efficient liquidity source for each transaction.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h3>We find the best rates</h3>
              <p>Our swap feature guarantees you a wide range of tokens and the best prices.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <h3>Slippage Protection</h3>
              <p>Orders are distributed across multiple DEXs to minimise the slippage effect on the concluding price.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-inner">
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>Does Trust Wallet provide the swap service?</h4>
            </div>
            <div className="faq-item">
              <h4>Who do you partner with to provide swaps?</h4>
            </div>
            <div className="faq-item">
              <h4>Does Trust Wallet charge a fee for swapping crypto?</h4>
            </div>
            <div className="faq-item">
              <h4>How are swap fees determined?</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="section-inner">
          <h2>Simple and convenient to use, seamless to explore</h2>
          <button className="btn primary">Download Trust Wallet</button>
        </div>
      </section>
    </div>
  )
}

export default Swaps