import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

function App() {
  const [count, setCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const increment = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_URL}/increment`, { method: 'POST' })
      const data = await res.json()
      setCount(data.count)
    } catch {
      setError('API呼び出しに失敗しました。バックエンドが起動しているか確認してください。')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>Counter App</h1>
      <p className="count">{count !== null ? count : '-'}</p>
      {error && <p className="error">{error}</p>}
      <button onClick={increment} disabled={loading}>
        {loading ? '...' : '+1'}
      </button>
    </div>
  )
}

export default App
