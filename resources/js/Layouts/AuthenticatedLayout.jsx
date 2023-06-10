import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import SideBar from '@/Components/SideBar';

export default function Authenticated({ auth, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#FDEFCE]">
      <nav className="bg-[#FDEFCE] border-b border-gray-100 dark:border-gray-700 pb-1">
        <div className="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">

            <div className="z-10 flex flex-col ">
              <div className="flex shrink-0">
                <Link href="/">
                  <ApplicationLogo className="block w-auto text-gray-800 fill-current h-9 dark:text-gray-200" />
                </Link>
              </div>
            </div>

            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <div className="relative ml-3">
                <Dropdown>
                  <Dropdown.Trigger>
                    <span className="inline-flex rounded-md">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-400 dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
                      >
                        {auth.user.full_name}

                        <svg
                          className="ml-2 -mr-0.5 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </Dropdown.Trigger>

                  <Dropdown.Content>
                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                    <Dropdown.Link href={route('logout')} method="post" as="button">
                      Log Out
                    </Dropdown.Link>
                  </Dropdown.Content>
                </Dropdown>
              </div>
            </div>

            <div className="flex items-center -mr-2 sm:hidden">
              <button
                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400"
              >
                <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
          <div className="pt-2 pb-3 space-y-1">
            <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
              Dashboard
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route('products')} active={route().current('products')}>
              Products
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
              Categorías
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
              Tablero de control
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
              Usuarios
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
              Creadores
            </ResponsiveNavLink>
          </div>

          <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
            <div className="px-4">
              <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                {auth.user.name}
              </div>
              <div className="text-sm font-medium text-gray-500">{auth.user.email}</div>
            </div>

            <div className="mt-3 space-y-1">
              <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
              <ResponsiveNavLink method="post" href={route('logout')} as="button">
                Log Out
              </ResponsiveNavLink>
            </div>
          </div>
        </div>
      </nav>

      {header && (
        <header className="bg-white dark:bg-[#FDEFCE] text-black shadow pl-[520px]">
          <div className="px-4 py-6 mx-auto text-black max-w-7xl sm:px-6 lg:px-8">{header}</div>
        </header>
      )}
      <div className='relative w-full h-screen max-w-full mx-auto bg-white/25'>

        <SideBar />

        <main className='absolute flex flex-col w-full h-full flex-1 pl-64 bg-[#E5F096] rounded-sm'>{children}</main>
      </div>
    </div>
  );
}
