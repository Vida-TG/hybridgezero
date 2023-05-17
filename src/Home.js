import React from 'react'
import { Connect } from './components/Connect'
import { NetworkSwitcher } from './components/NetworkSwitcher'

const Home = () => {
  return (
    <>
      <Connect />
      <NetworkSwitcher />
    </>
  )
}

export default Home