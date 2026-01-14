import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Staking from './Staking'
import Download from './Download'
import Swaps from './Swaps'
import Support from './Support'
import NFTs from './NFTs'
import BuyCrypto from './BuyCrypto'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
import ManageCrypto from './ManageCrypto'
import CryptoAbout from './CryptoAbout'
import Buy from './Buy'
import Sell from './Sell'
import Admin from './Admin'
import AdminLogin from './AdminLogin'
import Receive from './Receive'
import Watchlist from './Watchlist'


function AppContent() {
  const [isDark, setIsDark] = useState(false)
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false)
  const [showSupportDropdown, setShowSupportDropdown] = useState(false)
  const [showWalletDropdown, setShowWalletDropdown] = useState(false)
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  const location = useLocation()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // Hide header and footer for specific pages
  const hideHeaderFooter = ['/buy', '/sell', '/login', '/signup', '/dashboard', '/manage-crypto/about', '/admin', '/admin/login', '/receive', '/watchlist'].includes(location.pathname)

  return (
    <div className="page-root">
        {!hideHeaderFooter && <header className="site-header">
          <div className="header-inner">
            <Link to="/" className="brand">
              <div className="shield" aria-hidden>🔷</div>
              <span className="brand-text">LOCKCHAIN</span>
            </Link>

            <nav className="main-nav" aria-label="Main navigation">
              <div className="nav-dropdown" onMouseEnter={() => setShowWalletDropdown(true)} onMouseLeave={() => setShowWalletDropdown(false)}>
                <a href="#">Wallet</a>
                {showWalletDropdown && (
                  <div className="dropdown-menu support-dropdown">
                    <div className="dropdown-item">
                      <div className="dropdown-icon">🛡️</div>
                      <div>
                        <h4>Blue Shield</h4>
                        <p>Advanced security protection for your wallet</p>
                      </div>
                    </div>
                    <Link to="/download" className="dropdown-item">
                      <div className="dropdown-icon">📱</div>
                      <div>
                        <h4>Mobile App</h4>
                        <p>The world of Web3 in your pocket</p>
                      </div>
                    </Link>
                    <div className="dropdown-item">
                      <div className="dropdown-icon">🌐</div>
                      <div>
                        <h4>Browser Extension</h4>
                        <p>An optimized Web3 experience for desktop</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="nav-dropdown" onMouseEnter={() => setShowFeaturesDropdown(true)} onMouseLeave={() => setShowFeaturesDropdown(false)}>
                <a href="#">Features</a>
                {showFeaturesDropdown && (
                  <div className="dropdown-menu">
                    <Link to="/swaps" className="dropdown-item">
                      <div className="dropdown-icon">🔄</div>
                      <div>
                        <h4>Swaps</h4>
                        <p>Swap securely and seamlessly</p>
                      </div>
                    </Link>
                    <div className="dropdown-item">
                      <div className="dropdown-icon">📈</div>
                      <div>
                        <Link to="/staking" style={{textDecoration:'none',color:'inherit'}}>
                          <h4>Staking</h4>
                          <p>Earn crypto rewards while securing networks</p>
                        </Link>
                      </div>
                    </div>
                    <Link to="/nfts" className="dropdown-item">
                      <div className="dropdown-icon">🎨</div>
                      <div>
                        <h4>NFTs</h4>
                        <p>Explore the world of NFTs</p>
                      </div>
                    </Link>
                    <div className="dropdown-item">
                      <div className="dropdown-icon">🔒</div>
                      <div>
                        <h4>Security</h4>
                        <p>Learn how we keep your assets & Web3 journey safe</p>
                      </div>
                    </div>
                    <Link to="/buy-crypto" className="dropdown-item">
                      <div className="dropdown-icon">💳</div>
                      <div>
                        <h4>Buy Crypto</h4>
                        <p>Buy crypto in under five minutes</p>
                      </div>
                    </Link>
                    <div className="dropdown-item">
                      <div className="dropdown-icon">🛡️</div>
                      <div>
                        <h4>SWIFT: Smart Contract Wallet</h4>
                        <p>Explore Web3 easily with account abstraction features</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a href="#">Build</a>
              <Link to="/dashboard">Dashboard</Link>
              <div className="nav-dropdown" onMouseEnter={() => setShowSupportDropdown(true)} onMouseLeave={() => setShowSupportDropdown(false)}>
                <a href="#">Support</a>
                {showSupportDropdown && (
                  <div className="dropdown-menu support-dropdown">
                    <div className="dropdown-item">
                      <div className="dropdown-icon">🛡️</div>
                      <div>
                        <h4>Blue Shield</h4>
                        <p>Advanced security protection for your wallet</p>
                      </div>
                    </div>
                    <Link to="/support" className="dropdown-item">
                      <div className="dropdown-icon">❓</div>
                      <div>
                        <h4>FAQ</h4>
                        <p>Get answers to your most pressing questions</p>
                      </div>
                    </Link>
                    <div className="dropdown-item">
                      <div className="dropdown-icon">📞</div>
                      <div>
                        <h4>Contact Us</h4>
                        <p>Reach out for personalized support</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/about">About</Link>
            </nav>

            <div className="header-actions">
              <Link to="/login" className="btn ghost">Login</Link>
              <Link to="/signup" className="btn primary">Sign Up</Link>
              <button className="btn ghost" onClick={() => setIsDark(!isDark)}>
                {isDark ? '☀️' : '🌙'}
              </button>
              <div className="nav-dropdown" onMouseEnter={() => setShowLanguageDropdown(true)} onMouseLeave={() => setShowLanguageDropdown(false)}>
                <button className="btn ghost">{selectedLanguage}</button>
                {showLanguageDropdown && (
                  <div className="dropdown-menu language-dropdown">
                    <div className="dropdown-item" onClick={() => setSelectedLanguage('English')}>
                      <div className="dropdown-icon">🇺🇸</div>
                      <div>
                        <h4>English</h4>
                      </div>
                    </div>
                    <div className="dropdown-item" onClick={() => setSelectedLanguage('Español')}>
                      <div className="dropdown-icon">🇪🇸</div>
                      <div>
                        <h4>Español</h4>
                      </div>
                    </div>
                    <div className="dropdown-item" onClick={() => setSelectedLanguage('Français')}>
                      <div className="dropdown-icon">🇫🇷</div>
                      <div>
                        <h4>Français</h4>
                      </div>
                    </div>
                    <div className="dropdown-item" onClick={() => setSelectedLanguage('Deutsch')}>
                      <div className="dropdown-icon">🇩🇪</div>
                      <div>
                        <h4>Deutsch</h4>
                      </div>
                    </div>
                    <div className="dropdown-item" onClick={() => setSelectedLanguage('中文')}>
                      <div className="dropdown-icon">🇨🇳</div>
                      <div>
                        <h4>中文</h4>
                      </div>
                    </div>
                    <div className="dropdown-item" onClick={() => setSelectedLanguage('日本語')}>
                      <div className="dropdown-icon">🇯🇵</div>
                      <div>
                        <h4>日本語</h4>
                      </div>
                    </div>
                    <div className="dropdown-item" onClick={() => setSelectedLanguage('한국어')}>
                      <div className="dropdown-icon">🇰🇷</div>
                      <div>
                        <h4>한국어</h4>
                      </div>
                    </div>
                    <div className="dropdown-item" onClick={() => setSelectedLanguage('Русский')}>
                      <div className="dropdown-icon">🇷🇺</div>
                      <div>
                        <h4>Русский</h4>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button className="btn primary">Download</button>
            </div>
          </div>
        </header>}



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/download" element={<Download />} />
          <Route path="/swaps" element={<Swaps />} />
          <Route path="/support" element={<Support />} />
          <Route path="/nfts" element={<NFTs />} />
          <Route path="/buy-crypto" element={<BuyCrypto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-crypto" element={<ManageCrypto />} />
          <Route path="/manage-crypto/about" element={<CryptoAbout />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/receive" element={<Receive />} />
          <Route path="/watchlist" element={<Watchlist />} />
          
        </Routes>

        {!hideHeaderFooter && <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-grid">
              <div className="footer-col">
                <h4>Wallet</h4>
                <a href="#">Mobile App</a>
                <a href="#">Browser Extension</a>
              </div>
              <div className="footer-col">
                <h4>Features</h4>
                <a href="#">Buy Crypto</a>
                <a href="#">Swaps</a>
                <a href="#">Staking</a>
                <a href="#">NFTs</a>
                <a href="#">Security</a>
                <a href="#">SWIFT: Smart Contract Wallet</a>
              </div>
              <div className="footer-col">
                <h4>Build</h4>
                <a href="#">Developer Docs</a>
                <a href="#">Wallet Core</a>
                <a href="#">Submit dApp</a>
                <a href="#">Get assets listed</a>
              </div>
              <div className="footer-col">
                <h4>Support</h4>
                <a href="#">FAQ</a>
                <a href="#">Contact Us</a>
              </div>
              <div className="footer-col">
                <h4>About</h4>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Press Kit</a>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Notice</a>
                <a href="#">Cookie Preferences</a>
                <a href="#">Cookie Notice</a>
                <a href="#">Blog</a>
              </div>
            </div>
          </div>
        </footer>}
      </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
