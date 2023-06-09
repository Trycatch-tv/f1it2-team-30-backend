import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-lime-600 dark:border-lime-600 text-lime-800 dark:text-lime-500 focus:border-indigo-700 '
                    : 'border-transparent text-gray dark:text-lime-700 hover:text-gray-700 dark:hover:text-lime-400 hover:border-gray-300 dark:hover:border-gray-700 focus:text-lime-700 dark:focus:text-lime-500 focus:border-gray-300 dark:focus:border-gray-700 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
