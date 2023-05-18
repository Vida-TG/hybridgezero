import React from 'react'
import { Connect } from '../components/Connect'
import { NetworkSwitcher } from '../components/NetworkSwitcher'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <Connect />
        <NetworkSwitcher />
    </div>
  )
}

export default Header