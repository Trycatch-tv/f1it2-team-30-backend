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
        header={<h2 className="font-semibold text-2xl text-gray-800 dark:text-[#404750] leading-tight">Tablero</h2>}
      >
        <Head title="Tablero" />

        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 text-gray-900 dark:text-gray-100">Tablero ...</div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}