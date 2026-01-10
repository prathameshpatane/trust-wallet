import { useState } from "react"

interface PriceData {
  timestamp: number
  data: {
    priceUsd: string
  }
}

function PriceByAddress() {
  const [tokenAddress, setTokenAddress] = useState("")
  const [network, setNetwork] = useState("ethereum")
  const [priceData, setPriceData] = useState<PriceData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Mock price data since API requires authentication
  const mockPrices: {[key: string]: string} = {
    "0xa0b86a33e6441e6c7d3b4c0d": "1.23",
    "0xdac17f958d2ee523a2206206994597c13d831ec7": "1.00", // USDT
    "0x6b175474e89094c44da98b954eedeac495271d0f": "1.00", // DAI
    "848589": "0.0045"
  }

  const fetchPrice = async () => {
    if (!tokenAddress.trim()) {
      setError("Token address is required")
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const price = mockPrices[tokenAddress] || (Math.random() * 100).toFixed(4)
      
      setPriceData({
        timestamp: Date.now(),
        data: {
          priceUsd: price
        }
      })
    } catch (err) {
      setError("Failed to fetch price")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Get Price by Token Address</h2>
      
      <div style={{ marginBottom: "15px" }}>
        <label>Token Address:</label>
        <input
          type="text"
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)}
          placeholder="Enter token address"
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Network:</label>
        <select
          value={network}
          onChange={(e) => setNetwork(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        >
          <option value="ethereum">Ethereum</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="polygon">Polygon</option>
        </select>
      </div>

      <button
        onClick={fetchPrice}
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: loading ? "not-allowed" : "pointer"
        }}
      >
        {loading ? "Loading..." : "Get Price"}
      </button>

      {error && (
        <div style={{ color: "red", marginTop: "15px" }}>
          Error: {error}
        </div>
      )}

      {priceData && (
        <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
          <h3>Price Data</h3>
          <p><strong>Price USD:</strong> ${priceData.data.priceUsd}</p>
          <p><strong>Timestamp:</strong> {new Date(priceData.timestamp).toLocaleString()}</p>
          <p><strong>Network:</strong> {network}</p>
          <p><strong>Token Address:</strong> {tokenAddress}</p>
        </div>
      )}
    </div>
  )
}

export default PriceByAddress