import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'

function TopNav(){
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
        <h1>Temple Gallery</h1>
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
        
    </nav>
  )
}

export default TopNav