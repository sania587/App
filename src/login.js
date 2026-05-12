import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './index.css'

const Login = (props) => {
  const history = useHistory()
  const [formData, setFormData] = useState({ id: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Logging in with ID: ${formData.id}. (Demo Mode: Redirecting to Dashboard)`)
    history.push('/') // In a real app, this would go to a real dashboard
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#0f172a',
      padding: '20px'
    }}>
      <Helmet>
        <title>Login | Store Management</title>
      </Helmet>

      <div className="glass-panel" style={{ 
        maxWidth: '450px', 
        width: '100%', 
        padding: '40px', 
        borderRadius: '24px'
      }}>
        <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}>
          ← Back to Home
        </Link>

        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '10px' }}>Welcome Back</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Please enter your credentials to continue.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label>EMPLOYEE ID</label>
            <input 
              type="text" 
              placeholder="Enter your ID" 
              required 
              value={formData.id}
              onChange={(e) => setFormData({...formData, id: e.target.value})}
            />
          </div>
          <div>
            <label>PASSWORD</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>
          <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>
            Access Dashboard
          </button>
        </form>

        <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Don't have an account? <Link to="/register" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Register here</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
