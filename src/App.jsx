import { Route, Routes } from 'react-router-dom'
import './App.css'
import Content from './components/pages/Content'
import Header from './components/pages/Header'
import Navbar from './components/pages/Navbar'
import Article from './components/pages/article'
import Footer from './components/pages/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Content />}/>
        <Route path='/article' element={<Article />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
