import './App.css'

function Download() {
  return (
    <div className="download-page">
      <div className="download-hero">
        <div className="download-hero-content">
          <h1>Download LockChain Wallet</h1>
          <p className="download-lead">The LockChain Wallet is available as a mobile app and desktop browser extension</p>
        </div>
      </div>

      <div className="download-options">
        <div className="download-container">
          <div className="download-grid">
            <div className="download-card">
              <div className="download-icon">🍎</div>
              <h3>App Store</h3>
              <p>Download for iOS</p>
              <p className="download-desc">Get the wallet mobile app from the App Store.</p>
              <button className="btn primary">Download</button>
            </div>

            <div className="download-card">
              <div className="download-icon">🤖</div>
              <h3>Google Play</h3>
              <p>Download for Android</p>
              <p className="download-desc">Get the wallet mobile app from Google Play.</p>
              <button className="btn primary">Download</button>
            </div>

            <div className="download-card">
              <div className="download-icon">🌐</div>
              <h3>Chrome</h3>
              <p>Download for Chrome</p>
              <p className="download-desc">Get the desktop Browser Extension from the Chrome Web Store.</p>
              <button className="btn primary">Download</button>
            </div>

            <div className="download-card">
              <div className="download-icon">📱</div>
              <h3>APK</h3>
              <p>Download APK for Android</p>
              <p className="download-desc">Get the wallet mobile app using Android APK</p>
              <button className="btn primary">Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download