import React from 'react'
import Footer from './components/Footer/Footer'
import Alsobuy from './alsobuy/Alsobuy'
import Hidden from './alsobuy/Hidden'
import Help from './Help.jsx'
function App() {
  return (
    <div className='font-roboto'>
      <Hidden/>
      <Alsobuy/>
      <Help/>
      <Footer />
    </div>
  )
}

export default App

