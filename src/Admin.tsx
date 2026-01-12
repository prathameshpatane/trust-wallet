import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from './firebase'

interface User {
  id: string
  email: string
  name: string
  mobile?: string
  createdAt: any
  wallet?: { [key: string]: number }
}

interface SendCoinForm {
  userId: string
  coin: string
  amount: string
  operation: 'add' | 'deduct'
  isOpen: boolean
}

function Admin() {
  const navigate = useNavigate()
  const [users, setUsers] = useState<User[]>([])
  const [sendCoinForm, setSendCoinForm] = useState<SendCoinForm>({
    userId: '',
    coin: '',
    amount: '',
    operation: 'add',
    isOpen: false
  })
  const [activeTab, setActiveTab] = useState('customers')

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuth')
    if (!isAuthenticated) {
      navigate('/admin/login')
      return
    }
    fetchUsers()
  }, [navigate])

  const fetchUsers = async () => {
    // Always show sample users without Firebase dependency
    const sampleUsers: User[] = [
      { id: 'mknsHlzkWLZNkOdel5FrJes5Tjy1', name: 'Aku', email: 'aku@gmail.com', mobile: '+1-555-0123', wallet: { BTC: 0.5, ETH: 2.3, USDT: 500 }, createdAt: { toDate: () => new Date('2026-01-06') } },
      { id: 'GS6smRHW9rVnim42H7MPMqsx18f2', name: 'ABC User', email: 'abc@gmail.com', mobile: '+1-555-0456', wallet: { USDT: 1000, BNB: 5.2, SOL: 8.5 }, createdAt: { toDate: () => new Date('2026-01-06') } },
      { id: 'sample3', name: 'Shreya Nalawade', email: 'shreyanalawade882@gmail.com', mobile: '+1-555-0789', wallet: { SOL: 15.8, ADA: 500, BTC: 0.25 }, createdAt: { toDate: () => new Date('2026-01-06') } },
      { id: 'sample4', name: 'John Doe', email: 'john.doe@example.com', mobile: '+1-555-1234', wallet: { BTC: 1.2, ETH: 5.7, DOGE: 10000 }, createdAt: { toDate: () => new Date('2026-01-05') } },
      { id: 'sample5', name: 'Jane Smith', email: 'jane.smith@example.com', mobile: '+1-555-5678', wallet: { USDT: 2500, BNB: 12.3, TRX: 50000 }, createdAt: { toDate: () => new Date('2026-01-04') } },
      { id: 'sample6', name: 'Mike Johnson', email: 'mike.j@example.com', mobile: '+1-555-9012', wallet: { ETH: 3.4, SOL: 25.6, XRP: 1500 }, createdAt: { toDate: () => new Date('2026-01-03') } },
      { id: 'sample7', name: 'Sarah Wilson', email: 'sarah.w@example.com', mobile: '+1-555-3456', wallet: { BTC: 0.8, USDT: 750, ADA: 800 }, createdAt: { toDate: () => new Date('2026-01-02') } },
      { id: 'sample8', name: 'David Brown', email: 'david.brown@example.com', mobile: '+1-555-7890', wallet: { DOGE: 25000, TRX: 75000, BNB: 3.2 }, createdAt: { toDate: () => new Date('2026-01-01') } }
    ]
    
    setUsers(sampleUsers)
  }

  const sendCoinsToUser = async () => {
    if (!sendCoinForm.userId || !sendCoinForm.coin || !sendCoinForm.amount) {
      alert('Please fill all fields')
      return
    }

    try {
      const userRef = db.collection('users').doc(sendCoinForm.userId)
      const userDoc = await userRef.get()
      
      if (userDoc.exists) {
        const userData = userDoc.data()
        const currentWallet = userData?.wallet || {}
        const currentAmount = currentWallet[sendCoinForm.coin] || 0
        const changeAmount = parseFloat(sendCoinForm.amount)
        
        let newAmount
        if (sendCoinForm.operation === 'add') {
          newAmount = currentAmount + changeAmount
        } else {
          newAmount = Math.max(0, currentAmount - changeAmount)
        }
        
        await userRef.update({
          [`wallet.${sendCoinForm.coin}`]: newAmount
        })
        
        setSendCoinForm({ userId: '', coin: '', amount: '', operation: 'add', isOpen: false })
        fetchUsers()
        alert(`Coins ${sendCoinForm.operation === 'add' ? 'added' : 'deducted'} successfully!`)
      }
    } catch (error) {
      console.error('Error updating coins:', error)
      alert('Error updating coins')
    }
  }

  const getTotalBalance = (wallet: { [key: string]: number } = {}) => {
    return Object.values(wallet).reduce((total, amount) => total + (amount * 50000), 0).toFixed(2)
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    navigate('/admin/login')
  }

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      margin: 0, 
      padding: 0, 
      backgroundColor: '#f5f5f5',
      overflow: 'auto'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px 40px',
        backgroundColor: 'white',
        borderBottom: '1px solid #dee2e6'
      }}>
        <h1 style={{ margin: 0 }}>Admin Panel</h1>
        <button onClick={handleLogout} style={{ 
          padding: '10px 20px', 
          backgroundColor: '#dc3545', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}>
          Logout
        </button>
      </div>

      <div style={{ padding: '20px 40px' }}>
        <button 
          onClick={() => setActiveTab('customers')} 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: activeTab === 'customers' ? '#007bff' : '#6c757d', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}
        >
          All Customers ({users.length})
        </button>
      </div>

      {activeTab === 'customers' && (
        <div style={{ 
          margin: '0 40px 40px 40px', 
          backgroundColor: 'white', 
          borderRadius: '8px', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '20px', borderBottom: '1px solid #dee2e6' }}>
            <h2 style={{ margin: 0 }}>All Customers</h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontWeight: '600' }}>Name</th>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontWeight: '600' }}>Email</th>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontWeight: '600' }}>Mobile</th>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontWeight: '600' }}>Balance</th>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontWeight: '600' }}>Joined</th>
                  <th style={{ padding: '15px', textAlign: 'center', borderBottom: '2px solid #dee2e6', fontWeight: '600' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                    <td style={{ padding: '15px', fontWeight: '500' }}>{user.name || 'N/A'}</td>
                    <td style={{ padding: '15px' }}>{user.email}</td>
                    <td style={{ padding: '15px' }}>{user.mobile || 'N/A'}</td>
                    <td style={{ padding: '15px' }}>
                      <div style={{ fontWeight: '600', color: '#28a745' }}>${getTotalBalance(user.wallet)}</div>
                      {user.wallet && Object.keys(user.wallet).length > 0 && (
                        <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                          {Object.entries(user.wallet).map(([coin, amount]) => (
                            <div key={coin} style={{ marginBottom: '2px' }}>
                              <span style={{ fontWeight: '500' }}>{coin}:</span> {amount}
                            </div>
                          ))}
                        </div>
                      )}
                    </td>
                    <td style={{ padding: '15px' }}>
                      {user.createdAt ? new Date(user.createdAt.toDate()).toLocaleDateString() : 'N/A'}
                    </td>
                    <td style={{ padding: '15px', textAlign: 'center' }}>
                      <button 
                        onClick={() => setSendCoinForm({ ...sendCoinForm, userId: user.id, operation: 'add', isOpen: true })}
                        style={{ 
                          padding: '8px 16px', 
                          backgroundColor: '#28a745', 
                          color: 'white', 
                          border: 'none', 
                          borderRadius: '4px', 
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: '500'
                        }}
                      >
                        Manage Coins
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {sendCoinForm.isOpen && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundColor: 'rgba(0,0,0,0.5)', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '30px', 
            borderRadius: '8px', 
            width: '400px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '20px' }}>Send Cryptocurrency</h3>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>User:</label>
              <input 
                type="text" 
                value={users.find(u => u.id === sendCoinForm.userId)?.email || ''}
                disabled
                style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#f5f5f5' }}
              />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Cryptocurrency:</label>
              <select 
                value={sendCoinForm.coin} 
                onChange={(e) => setSendCoinForm({...sendCoinForm, coin: e.target.value})}
                style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              >
                <option value="">Select cryptocurrency</option>
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="USDT">Tether (USDT)</option>
                <option value="BNB">Binance Coin (BNB)</option>
                <option value="SOL">Solana (SOL)</option>
                <option value="ADA">Cardano (ADA)</option>
                <option value="DOGE">Dogecoin (DOGE)</option>
                <option value="MATIC">Polygon (MATIC)</option>
                <option value="AVAX">Avalanche (AVAX)</option>
                <option value="LINK">Chainlink (LINK)</option>
                <option value="LTC">Litecoin (LTC)</option>
                <option value="UNI">Uniswap (UNI)</option>
              </select>
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Operation:</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input 
                    type="radio" 
                    name="operation" 
                    value="add" 
                    checked={sendCoinForm.operation === 'add'}
                    onChange={(e) => setSendCoinForm({...sendCoinForm, operation: e.target.value as 'add' | 'deduct'})}
                    style={{ marginRight: '5px' }}
                  />
                  Add Coins
                </label>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input 
                    type="radio" 
                    name="operation" 
                    value="deduct" 
                    checked={sendCoinForm.operation === 'deduct'}
                    onChange={(e) => setSendCoinForm({...sendCoinForm, operation: e.target.value as 'add' | 'deduct'})}
                    style={{ marginRight: '5px' }}
                  />
                  Deduct Coins
                </label>
              </div>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Amount:</label>
              <input 
                type="number" 
                step="0.00000001"
                value={sendCoinForm.amount} 
                onChange={(e) => setSendCoinForm({...sendCoinForm, amount: e.target.value})}
                style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                placeholder="Enter amount"
              />
            </div>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                onClick={sendCoinsToUser}
                style={{ 
                  flex: 1,
                  padding: '10px', 
                  backgroundColor: sendCoinForm.operation === 'add' ? '#28a745' : '#dc3545', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '5px', 
                  cursor: 'pointer'
                }}
              >
                {sendCoinForm.operation === 'add' ? 'Add Coins' : 'Deduct Coins'}
              </button>
              <button 
                onClick={() => setSendCoinForm({ userId: '', coin: '', amount: '', operation: 'add', isOpen: false })}
                style={{ 
                  flex: 1,
                  padding: '10px', 
                  backgroundColor: '#6c757d', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '5px', 
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin