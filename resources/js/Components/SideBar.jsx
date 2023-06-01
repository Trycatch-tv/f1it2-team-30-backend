import React from 'react'
import NavLink from '@/Components/NavLink';

function SideBar() {
  return (
    <div className='  fixed flex w-64 h-screen flex-col'>
      <nav className='flex flex-col flex-1 h-full p-2 space-y-1'>
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink href={route('dashboard')} active={route().current('dashboard')}>
            Dashboard
          </NavLink>
        </div>
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink href={route('dashboard')} active={route().current('dashboard')}>
            Dashboard
          </NavLink>
        </div>
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink href={route('dashboard')} active={route().current('dashboard')}>
            Dashboard
          </NavLink>
        </div>
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink href={route('dashboard')} active={route().current('dashboard')}>
            Dashboard
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default SideBar
