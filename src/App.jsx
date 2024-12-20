import React from 'react'
import Footer from './components/Footer/Footer'
import Alsobuy from './alsobuy/Alsobuy'
import Hidden from './alsobuy/Hidden'
function App() {
  return (
    <div className='font-roboto'>
      <Hidden/>
      <Alsobuy/>
      <Footer />
    </div>
  )
}

export default App

