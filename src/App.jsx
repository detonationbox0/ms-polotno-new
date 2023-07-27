import { useState } from 'react'

import Header from './components/Header'
import PolotnoApp from './components/PolotnoApp.jsx'

import './App.css'

function App() {


  // const { store } = createDemoApp({
  //   container: document.getElementById('root'),
  //   key: 'c-vws7wDr8jo1Zz6hItJ',
  //   showCredit: true
  // }) 

  return (
    <>
      <Header />
      <PolotnoApp />
    </>
  )
}

export default App
