import { useState, useEffect } from 'react'
import './App.css'
import { getRandomQuote } from './api'

function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  const handleUpdateQuote = () => {
    getRandomQuote().then((data) => {
      setQuote(data.content)
      setAuthor(data.author)
    })
  }

  useEffect(() => {
    handleUpdateQuote()
  }, [])

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
          <button className='button' id='new-quote' onClick={handleUpdateQuote}>
            New Quote
          </button>
          <a className='button' id='tweet-quote' href='twitter.com/intent/tweet'>
            Tweet Quote
          </a>
        </div>
      </div>
    </main>
  )
}

export default App
