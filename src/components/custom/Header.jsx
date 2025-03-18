import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='p-2 shadow-md flex justify-between items-center px-5'>
     <img src='/logo.svg'/>
     <div className=' opacity-90'>
        <Button>Sign In</Button>
     </div>
    </div>
  )
}

export default Header
