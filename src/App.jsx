import { useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  return (
    <main className='main'>
      <div className='container' id='quote-box'>
        <h1 className='quote' id='text'>
          {quote}
        </h1>
        <h2 className='author' id='author'>
          {author}
        </h2>
        <div className='buttons'>
        </div>
      </div>
    </main>
  )
}

export default App
