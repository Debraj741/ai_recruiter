import { UserButton } from '@stackframe/stack'
import Image from 'next/image'
import React from 'react'

function AppHeader() {
  return (
    <div className='p-4 shadow-md flex items-center justify-between'>
      <Image src={"/logo.svg"} alt='logo' width={170} height={200} />
      <UserButton/>
    </div>
  )
}

export default AppHeader
