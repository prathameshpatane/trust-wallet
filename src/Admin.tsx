import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { collection, getDocs, updateDoc, doc } from "firebase/firestore"
import { db } from "./firebase"

interface User {
  id: string
  uid: string
  fullName: string
  email: string
  role: string
  accountStatus: string
  emailVerified: boolean
  createdAt: string
  lastLogin: string
  wallet?: { [key: string]: number }
}

interface CoinAction {
  userId: string
  coin: string
  amount: number
  action: 'add' | 'deduct'
}

function Admin() {
  const navigate = useNavigate()
  const [users, setUsers] = useState<User[]>([])
  const [coinAction, setCoinAction] = useState<CoinAction | null>(null)

  // 🔐 Admin auth check (UNCHANGED)
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuth")
    if (!isAuthenticated) {
      navigate("/admin/login")
      return
    }
    fetchUsers()
  }, [navigate])

  // 🔥 FETCH USERS FROM FIRESTORE
  const fetchUsers = async () => {
    try {
      const snap = await getDocs(collection(db, "users"))
      const list = snap.docs.map(docSnap => ({
        id: docSnap.id,
        ...(docSnap.data() as Omit<User, "id">)
      }))
      setUsers(list)
    } catch (err) {
      console.error("Error fetching users:", err)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    navigate("/admin/login")
  }

  const openCoinAction = (userId: string, action: 'add' | 'deduct') => {
    setCoinAction({ userId, coin: 'BTC', amount: 0, action })
  }

  const saveCoinAction = async () => {
    if (!coinAction) return

    try {
      const user = users.find(u => u.id === coinAction.userId)
      if (!user) return

      const currentAmount = user.wallet?.[coinAction.coin] || 0
      const newAmount = coinAction.action === 'add' 
        ? currentAmount + coinAction.amount
        : Math.max(0, currentAmount - coinAction.amount)

      await updateDoc(doc(db, "users", coinAction.userId), {
        [`wallet.${coinAction.coin}`]: newAmount
      })

      setCoinAction(null)
      fetchUsers()
      alert(`Successfully ${coinAction.action === 'add' ? 'added' : 'deducted'} ${coinAction.amount} ${coinAction.coin}`)
    } catch (err) {
      console.error(err)
      alert("Failed to update wallet")
    }
  }

  return (
    <div style={{ 
      width: '100vw',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      margin: 0,
      padding: 0,
      overflow: 'auto'
    }}>
      {/* HEADER */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '20px 40px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: '700' }}>Admin Panel</h1>
          <button 
            onClick={handleLogout}
            style={{
              padding: '10px 20px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.3)'}
            onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.2)'}
          >
            Logout
          </button>
        </div>
      </div>

      <div style={{ padding: '40px' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '24px 32px',
            borderBottom: '1px solid #e9ecef',
            backgroundColor: '#fff'
          }}>
            <h2 style={{ margin: 0, color: '#2c3e50', fontSize: '1.5rem' }}>Users ({users.length})</h2>
          </div>

          {/* USERS TABLE */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              backgroundColor: 'white'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <th style={{
                    padding: '16px 24px',
                    textAlign: 'left',
                    fontWeight: '600',
                    color: '#495057',
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '2px solid #dee2e6'
                  }}>Name</th>
                  <th style={{
                    padding: '16px 24px',
                    textAlign: 'left',
                    fontWeight: '600',
                    color: '#495057',
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '2px solid #dee2e6'
                  }}>Email</th>
                  <th style={{
                    padding: '16px 24px',
                    textAlign: 'left',
                    fontWeight: '600',
                    color: '#495057',
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '2px solid #dee2e6'
                  }}>Role</th>
                  <th style={{
                    padding: '16px 24px',
                    textAlign: 'left',
                    fontWeight: '600',
                    color: '#495057',
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '2px solid #dee2e6'
                  }}>Status</th>
                  <th style={{
                    padding: '16px 24px',
                    textAlign: 'left',
                    fontWeight: '600',
                    color: '#495057',
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '2px solid #dee2e6'
                  }}>Joined</th>
                  <th style={{
                    padding: '16px 24px',
                    textAlign: 'center',
                    fontWeight: '600',
                    color: '#495057',
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '2px solid #dee2e6'
                  }}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id} style={{
                    borderBottom: '1px solid #f1f3f4',
                    backgroundColor: index % 2 === 0 ? '#fff' : '#fafbfc',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#fff' : '#fafbfc'}
                  >
                    <td style={{ 
                      padding: '16px 24px',
                      fontWeight: '500',
                      color: '#2c3e50'
                    }}>{user.fullName}</td>
                    <td style={{ 
                      padding: '16px 24px',
                      color: '#6c757d'
                    }}>{user.email}</td>
                    <td style={{ padding: '16px 24px' }}>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        backgroundColor: user.role === 'admin' ? '#e3f2fd' : '#f3e5f5',
                        color: user.role === 'admin' ? '#1976d2' : '#7b1fa2'
                      }}>
                        {user.role}
                      </span>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        backgroundColor: user.accountStatus === 'active' ? '#d4edda' : '#f8d7da',
                        color: user.accountStatus === 'active' ? '#155724' : '#721c24'
                      }}>
                        {user.accountStatus}
                      </span>
                    </td>
                    <td style={{ 
                      padding: '16px 24px',
                      color: '#6c757d',
                      fontSize: '0.875rem'
                    }}>{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        <button 
                          onClick={() => openCoinAction(user.id, 'add')}
                          style={{
                            padding: '6px 12px',
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '0.75rem',
                            fontWeight: '500'
                          }}
                        >
                          Add Coins
                        </button>
                        <button 
                          onClick={() => openCoinAction(user.id, 'deduct')}
                          style={{
                            padding: '6px 12px',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '0.75rem',
                            fontWeight: '500'
                          }}
                        >
                          Deduct Coins
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* COIN ACTION MODAL */}
      {coinAction && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{ 
            background: "#fff", 
            padding: '32px',
            width: '400px',
            borderRadius: '16px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ 
              margin: '0 0 24px 0',
              color: '#2c3e50',
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>{coinAction.action === 'add' ? 'Add' : 'Deduct'} Coins</h3>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#495057'
              }}>Cryptocurrency</label>
              <select
                value={coinAction.coin}
                onChange={e => setCoinAction({ ...coinAction, coin: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  backgroundColor: 'white'
                }}
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="BNB">Binance Coin (BNB)</option>
                <option value="ADA">Cardano (ADA)</option>
                <option value="SOL">Solana (SOL)</option>
              </select>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#495057'
              }}>Amount</label>
              <input
                type="number"
                step="0.00000001"
                min="0"
                value={coinAction.amount}
                onChange={e => setCoinAction({ ...coinAction, amount: parseFloat(e.target.value) || 0 })}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => setCoinAction(null)}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                Cancel
              </button>
              <button 
                onClick={saveCoinAction}
                style={{
                  padding: '12px 24px',
                  backgroundColor: coinAction.action === 'add' ? '#28a745' : '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                {coinAction.action === 'add' ? 'Add' : 'Deduct'} Coins
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin
