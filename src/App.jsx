import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './index.css'

const MainPage = (props) => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'radial-gradient(circle at top right, #1e293b, #0f172a)',
      padding: '20px'
    }}>
      <Helmet>
        <title>Industrial Store Management</title>
      </Helmet>

      <div className="glass-panel" style={{ 
        maxWidth: '500px', 
        width: '100%', 
        padding: '50px', 
        borderRadius: '32px', 
        textAlign: 'center' 
      }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>🏭</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '10px' }}>
          Store Management
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: '1.6' }}>
          The industrial-grade solution for tracking inventory, managing stock, and optimizing supply chain operations.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Link to="/login" className="btn-primary" style={{ fontSize: '1.1rem' }}>
            Sign In to Dashboard
          </Link>
          <Link to="/register" className="btn-primary" style={{ 
            background: 'rgba(255,255,255,0.05)', 
            border: '1px solid var(--border)',
            fontSize: '1.1rem'
          }}>
            Create New Account
          </Link>
        </div>

        <div style={{ marginTop: '40px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          © 2024 Industrial Systems Inc. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default MainPage
