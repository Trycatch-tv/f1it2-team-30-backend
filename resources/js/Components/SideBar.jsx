import React from 'react'
import NavLink from '@/Components/NavLink';

function SideBar() {
  return (
    <div className='z-10 absolute flex w-64 h-screen flex-col mt-[0.4px] bg-[#FDEFCE]'>
      <nav className='flex flex-1 h-full pt-16 p-2 flex-col gap-5'>
        {/* <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink href={route('dashboard')} active={route().current('dashboard')}>
            Dashboard
          </NavLink>
        </div> */}
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink className='text-xl' href={route('products')} active={route().current('products')}>
            Lista de Productos
          </NavLink>
        </div>
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink className='text-xl' href={route('categories')} active={route().current('categories')}>
            Categorías
          </NavLink>
        </div>
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink className='text-xl' href={route('tablero')} active={route().current('tablero')}>
            Tablero de control
          </NavLink>
        </div>
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink className='text-xl' href={route('users')} active={route().current('users')}>
            Usuarios
          </NavLink>
        </div>
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink className='text-xl' href={route('creators')} active={route().current('creators')}>
            Creadores
          </NavLink>
        </div>

      </nav>
    </div>
  )
}

export default SideBar
