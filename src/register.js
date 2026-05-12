import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './index.css'

const Register = (props) => {
  const history = useHistory()
  const [formData, setFormData] = useState({ email: '', password: '', contact: '', gender: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Account created for: ${formData.email}. (Demo Mode: Redirecting to Login)`)
    history.push('/login')
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
        <title>Register | Store Management</title>
      </Helmet>

      <div className="glass-panel" style={{ 
        maxWidth: '500px', 
        width: '100%', 
        padding: '40px', 
        borderRadius: '24px'
      }}>
        <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}>
          ← Back to Home
        </Link>

        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '10px' }}>Create Account</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Join the industrial store management network.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label>EMAIL ADDRESS</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div>
              <label>CONTACT NO</label>
              <input 
                type="text" 
                placeholder="+1..." 
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
              />
            </div>
            <div>
              <label>GENDER</label>
              <select style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border)',
                color: 'white',
                padding: '14px',
                borderRadius: '10px',
                width: '100%',
                outline: 'none'
              }}
              value={formData.gender}
              onChange={(e) => setFormData({...formData, gender: e.target.value})}
              >
                <option value="" style={{background: '#1e293b'}}>Select</option>
                <option value="male" style={{background: '#1e293b'}}>Male</option>
                <option value="female" style={{background: '#1e293b'}}>Female</option>
                <option value="other" style={{background: '#1e293b'}}>Other</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>
            Register Account
          </button>
        </form>

        <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default Register
