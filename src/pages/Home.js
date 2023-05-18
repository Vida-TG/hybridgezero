import React from 'react'
import { Connect } from '../components/Connect'
import { NetworkSwitcher } from '../components/NetworkSwitcher'
import Main from '../components/Main'

const Home = () => {
  return (
    <>
      <Connect />
      <NetworkSwitcher />
      <Main />
    </>
  )
}

export default Home