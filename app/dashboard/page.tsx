"use client"
import { signOutAction } from '../actions';
import { Button } from '@/components/ui/button';
import { BottomNav } from '@/components/ui/bottom-nav';
const dashboard = () => {

  
  return (
    <>

    <BottomNav/>
    <Button
        onClick={() => {
          signOutAction();

        }}
      >
        Log out
      </Button>   </>
  )
}

export default dashboard