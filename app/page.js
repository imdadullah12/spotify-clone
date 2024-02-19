import React from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { Button } from '@/components/ui/button'

const HomePage = () => {
  return (
    <div className='flex flex-col md:flex-row h-screen w-screen'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default HomePage
