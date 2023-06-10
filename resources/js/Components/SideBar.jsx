import React from 'react'
import NavLink from '@/Components/NavLink';
import { IconChart, IconCreate, IconProduct, IconTable, IconUsers } from '@/Icons/Icons';

function SideBar() {
  return (
    <div className='z-10 absolute flex w-72 h-full flex-col mt-[0.4px] bg-[#FDEFCE]'>
      <nav className='flex flex-1 pt-16 p-2 flex-col gap-10'>
        {/* <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink href={route('dashboard')} active={route().current('dashboard')}>
            Dashboard
          </NavLink>
        </div> */}
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink className='text-xl gap-2' href={route('products')} active={route().current('products')}>
            <IconProduct />
            Lista de Productos
          </NavLink>
        </div>
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink className='text-xl gap-2' href={route('categories')} active={route().current('categories')}>
            <IconChart />
            Categorías
          </NavLink>
        </div>
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink className='text-xl gap-2' href={route('tablero')} active={route().current('tablero')}>
            <IconTable />
            Tablero de control
          </NavLink>
        </div>
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink className='text-xl gap-2' href={route('users')} active={route().current('users')}>
            <IconUsers />
            Usuarios
          </NavLink>
        </div>
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink className='text-xl gap-2' href={route('creators')} active={route().current('creators')}>
            <IconCreate />
            Creadores
          </NavLink>
        </div>

      </nav>
    </div>
  )
}

export default SideBar
