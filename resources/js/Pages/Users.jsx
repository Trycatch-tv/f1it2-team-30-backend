import React from 'react'
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Inicio(props) {
  return (
    <>
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-2xl text-gray-800 dark:text-[#404750] leading-tight">Lista de Usuario</h2>}
      >
        <Head title="Users" />

        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 text-gray-900 dark:text-gray-100">Usuarios ...
                <table className='bg-gray-100 place.items-center py-6'>
                  <thead>
                    <tr className='bg-gray-100'>
                      <th className='border border-gray-400 px-2 py-2'>Nombre</th>
                      <th className='border border-gray-400 px-2 py-2'>Cargo</th>
                      <th className='border border-gray-400 px-2 py-2'>Fecha de ingreso</th>
                      <th className='border border-gray-400 px-2 py-2'>Estado</th>
                      <th className='border border-gray-400 px-2 py-2'>Fecha actualizacion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-gray-400 px-2 py-2'>Paula Leal</td>
                      <td className='border border-gray-400 px-2 py-2'>Administradora</td>
                      <td className='border border-gray-400 px-2 py-2'>2020/01/03</td>
                      <td className='border border-gray-400 px-2 py-2'>Activo</td>
                      <td className='border border-gray-400 px-2 py-2'>2022/09/10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}