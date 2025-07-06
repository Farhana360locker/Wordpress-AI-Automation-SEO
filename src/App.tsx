import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>WordPress AI Automation Plugin</h1>
        <p>
          A powerful plugin for automating WordPress tasks with AI
        </p>
      </header>
      <main className="app-main">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Content Generation</h3>
            <p>Automatically generate high-quality content using AI</p>
          </div>
          <div className="feature-card">
            <h3>SEO Optimization</h3>
            <p>Optimize your content for search engines automatically</p>
          </div>
          <div className="feature-card">
            <h3>Task Automation</h3>
            <p>Automate repetitive WordPress tasks</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App