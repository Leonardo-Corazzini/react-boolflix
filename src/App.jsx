import Header from './components/Header'
import Main from './components/Main'
import GlobalContext from './context/GlobalContext'
import { useState } from 'react'
function App() {
  const [films, setFilms] = useState([])

  return (
    <>
      <GlobalContext.Provider value={{ films, setFilms }}>
        <Header />
        <Main />
      </GlobalContext.Provider>

    </>
  )
}

export default App
