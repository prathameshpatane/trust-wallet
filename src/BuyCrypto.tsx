import './App.css'

function BuyCrypto() {
  return (
    <div className="buy-crypto-page">
      <div className="buy-crypto-layout">
      <section className="buy-crypto-hero">
        <div className="section-inner">
          <h1>Buy crypto the way you want</h1>
          <p className="lead">Choose from 110+ fiat currencies, and buy the crypto you want, effortlessly</p>
        </div>
      </section>

      <section className="payment-partners">
        <div className="section-inner">
          <h2>Compare and buy with trusted partners and payment methods</h2>
          <div className="partners-grid">
            <div className="partner-item">🍎 Apple Pay</div>
            <div className="partner-item">🚀 Ramp</div>
            <div className="partner-item">🌙 Moonpay</div>
            <div className="partner-item">🔍 Google Pay</div>
            <div className="partner-item">🏦 Sepa</div>
            <div className="partner-item">⚡ Simplex</div>
            <div className="partner-item">☿ Mercuryo</div>
          </div>
        </div>
      </section>

      <section className="buy-crypto-features">
        <div className="section-inner">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global coverage</h3>
              <p>Top up your wallet with a wide selection of payment methods including Apple Pay, Google Pay, debit and credit card, or bank transfer.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>100+ local fiat currencies</h3>
              <p>Convert USD, EUR, GBP and 100+ other fiat currencies seamlessly to crypto.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Competitive rates</h3>
              <p>Compare and secure the best rates from trusted payment providers across a wide range of cryptocurrencies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="download-cta">
        <div className="section-inner">
          <div className="cta-content">
            <div className="cta-visual">📱</div>
            <div className="cta-text">
              <h2>Download your crypto Wallet today!</h2>
              <p>Trust Wallet is a secure, self-custody crypto wallet supporting 10M+ assets across 100+ blockchains including crypto. Buy, sell, swap, transfer and earn crypto all in one place. Available for iOS, Android, and desktop browsers.</p>
              <button className="btn primary">Download Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-inner">
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>What are the fees?</h4>
            </div>
            <div className="faq-item">
              <h4>What payment methods can I use?</h4>
            </div>
            <div className="faq-item">
              <h4>What currencies do you support for buying crypto?</h4>
            </div>
            <div className="faq-item">
              <h4>Who are the fiat-to-crypto payment partners?</h4>
            </div>
            <div className="faq-item">
              <h4>Is there a minimum or maximum purchase amount?</h4>
            </div>
            <div className="faq-item">
              <h4>Which cryptocurrencies can I buy directly through the wallet?</h4>
            </div>
            <div className="faq-item">
              <h4>Does Trust Wallet support crypto withdrawals or crypto-to-fiat solutions?</h4>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default BuyCrypto