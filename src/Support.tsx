import './App.css'
import supportHero from './assets/support-hero.svg'
import prioritySupport from './assets/priority-support.svg'
import chatbot from './assets/chatbot.svg'
import securityShield from './assets/security-shield.svg'
import twtUtility from './assets/twt-utility.svg'
import bugBounty from './assets/bug-bounty.svg'
import tokenListing from './assets/token-listing.svg'
import launchpool from './assets/launchpool.svg'

function Support() {
  return (
    <div className="support-page">
      <div className="support-hero">
        <div className="support-hero-content">
          <div className="hero-visual">
            <img src={supportHero} alt="Support Help" className="support-hero-image" />
            <div className="floating-icons">
              <div className="floating-icon">💬</div>
              <div className="floating-icon">🛡️</div>
              <div className="floating-icon">⚡</div>
            </div>
          </div>
          <h1>How can we help you</h1>
          <p className="hero-subtitle">Get instant answers or connect with our support team</p>
          <div className="search-container">
            <div className="search-wrapper">
              <div className="search-icon">🔍</div>
              <input type="text" placeholder="Search our FAQs" className="search-input" />
            </div>
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>

      <section className="priority-support">
        <div className="section-inner">
          <div className="priority-main-card">
            <div className="priority-visual">
              <img src={prioritySupport} alt="Priority Support" className="priority-image" />
              <div className="priority-glow"></div>
            </div>
            <div className="priority-content">
              <div className="priority-header">
                <div className="human-face">👤</div>
                <div className="blue-glass">🔵</div>
              </div>
              <div className="priority-badge">Lock 50 TWT to qualify</div>
              <h2>Jump the queue</h2>
              <h1>Get Priority Support</h1>
              <button className="btn primary connect-wallet-btn">
                <span className="btn-icon">🔗</span>
                Connect Wallet
              </button>
              <a href="#" className="learn-more">Learn more</a>
            </div>
          </div>
          
          <div className="support-features-grid">
            <div className="feature-card premium">
              <div className="feature-icon">⚡</div>
              <h4>Priority Support</h4>
              <p>Receive a reply within 72 hours</p>
              <div className="feature-badge">Premium</div>
            </div>
            <div className="feature-card free">
              <div className="feature-icon">🤖</div>
              <h4>Get Free Support</h4>
              <p>Ask our chatbot</p>
              <div className="feature-badge free-badge">Free</div>
            </div>
            <div className="feature-card exclusive">
              <div className="feature-icon">💎</div>
              <h4>Exclusive to TWT holders</h4>
              <p>Min 50 TWT required</p>
              <div className="feature-badge">Exclusive</div>
            </div>
            <div className="feature-card premium-services">
              <div className="feature-icon">🎯</div>
              <h4>Premium support and exclusive services</h4>
              <p>Connect wallet to access →</p>
              <div className="feature-badge">VIP</div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="section-inner">
          <h2>Why choose our support?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-visual">
                <div className="benefit-icon">⚡</div>
              </div>
              <h3>Express lane</h3>
              <p>Enjoy faster assistance with Priority Support</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-visual">
                <div className="benefit-icon">🤖</div>
              </div>
              <h3>AI Tools</h3>
              <p>Detect and resolve issues with AI transaction checker</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-visual">
                <div className="benefit-icon">✨</div>
              </div>
              <h3>More benefits</h3>
              <p>Coming soon, new features to enhance your experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="trending-topics">
        <div className="section-inner">
          <h2>Trending topics</h2>
          <div className="topics-list">
            <a href="#" className="topic-item">How to transfer funds to my bank account</a>
            <a href="#" className="topic-item">Report Scam & Fraud</a>
            <a href="#" className="topic-item">Send funds to the wrong network</a>
            <a href="#" className="topic-item">Lost Recovery Phrase or Private Key</a>
            <a href="#" className="topic-item">What to do if Selling Crypto in-app Fails</a>
            <a href="#" className="topic-item">How to Locate Missing Funds</a>
          </div>
        </div>
      </section>

      <section className="support-topics">
        <div className="section-inner">
          <h2>Support topics</h2>
          <div className="topics-grid">
            <a href="#" className="topic-card">
              <div className="topic-icon">🚀</div>
              <span>Getting started with Trust Wallet</span>
            </a>
            <a href="#" className="topic-card">
              <div className="topic-icon">💰</div>
              <span>Buying and Cashing Out Crypto</span>
            </a>
            <a href="#" className="topic-card">
              <div className="topic-icon">🎁</div>
              <span>Generating Rewards</span>
            </a>
            <a href="#" className="topic-card">
              <div className="topic-icon">🔗</div>
              <span>Connecting to DeFi and dApps</span>
            </a>
            <a href="#" className="topic-card">
              <div className="topic-icon">🛡️</div>
              <span>Security</span>
            </a>
            <a href="#" className="topic-card">
              <div className="topic-icon">📚</div>
              <span>How-to Guides</span>
            </a>
          </div>
        </div>
      </section>

      <section className="twt-program">
        <div className="section-inner">
          <div className="program-content">
            <div className="program-visual">
              <img src={twtUtility} alt="TWT Utility Program" className="twt-image" />
            </div>
            <div className="program-text">
              <h2>Introducing the TWT Utility Program</h2>
              <p>If you support Trust Wallet by holding at least 50 Locked TWT in your wallet, you get access to expedited replies on all your questions to our CS team and premium content on the support page.</p>
              <p className="program-highlight">Stay tuned for more, this is just the beginning</p>
              <button className="btn secondary blog-btn">
                <span className="btn-icon">📖</span>
                Read Our Latest Blog
              </button>
            </div>
          </div>
          
          <div className="priority-program-card">
            <div className="program-header">
              <div className="program-icon">💎</div>
              <h3>Priority Support Program</h3>
            </div>
            <p>Lock 50 TWT or more in your wallet to qualify for priority support features and receive expedited assistance from our team.</p>
            <div className="program-features">
              <div className="program-feature">
                <span className="feature-check">✅</span>
                <span>72-hour response guarantee</span>
              </div>
              <div className="program-feature">
                <span className="feature-check">✅</span>
                <span>Premium content access</span>
              </div>
              <div className="program-feature">
                <span className="feature-check">✅</span>
                <span>Exclusive support channels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="section-inner">
          <h2>Contact us for:</h2>
          <div className="contact-grid">
            <div className="contact-item bug-bounty">
              <div className="contact-visual">
                <img src={bugBounty} alt="Bug Bounty" className="contact-image" />
              </div>
              <h3>Bug Bounty</h3>
              <p>Help us maintain security and earn rewards for vulnerability discoveries</p>
              <button className="btn secondary report-btn">
                <span className="btn-icon">🛡️</span>
                Report Vulnerability
              </button>
            </div>
            <div className="contact-item token-listing">
              <div className="contact-visual">
                <img src={tokenListing} alt="Token Listing" className="contact-image" />
              </div>
              <h3>List a Token</h3>
              <p>Submit your token for review and potential listing on Trust Wallet</p>
              <button className="btn secondary submit-btn">
                <span className="btn-icon">🪙</span>
                Submit Token
              </button>
            </div>
            <div className="contact-item launchpool">
              <div className="contact-visual">
                <img src={launchpool} alt="Launchpool" className="contact-image" />
              </div>
              <h3>Launchpool Listing</h3>
              <p>Apply for featured placement in Trust Wallet's Launchpool program</p>
              <button className="btn secondary apply-btn">
                <span className="btn-icon">🚀</span>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="chatbot-section">
        <div className="section-inner">
          <div className="chatbot-content">
            <div className="chatbot-visual">
              <img src={chatbot} alt="AI Chatbot" className="chatbot-image" />
              <div className="chatbot-pulse"></div>
            </div>
            <h2>Not what you are looking for?</h2>
            <p className="chatbot-subtitle">Our AI assistant is here to help 24/7</p>
            <button className="btn primary chatbot-btn">
              <span className="btn-icon">🤖</span>
              Ask our Chatbot
            </button>
          </div>
        </div>
      </section>

      <footer className="support-footer">
        <div className="section-inner">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="brand-logo">🛡️</div>
              <h3>Trust Wallet</h3>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Wallet</h4>
                <a href="#">Mobile App</a>
                <a href="#">Browser Extension</a>
              </div>
              <div className="footer-column">
                <h4>Features</h4>
                <a href="#">Buy Crypto</a>
                <a href="#">Swaps</a>
                <a href="#">Staking</a>
                <a href="#">NFTs</a>
              </div>
              <div className="footer-column">
                <h4>Security</h4>
                <a href="#">SWIFT: Smart Contract Wallet</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Support