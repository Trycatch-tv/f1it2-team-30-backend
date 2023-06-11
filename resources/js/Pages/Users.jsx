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
              header={
                  <h2 className="font-semibold text-2xl text-gray-800 dark:text-[#404750] leading-tight">
                      Lista de Usuario
                  </h2>
              }
          >
              <Head title="Users" />

              <div className="py-12">
                  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                      <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                          <div className="p-6 text-gray-900 dark:text-gray-100">
                              Lista de usuarios
                              <table className="border table-auto gray-400">
                                  <thead>
                                      <tr className="bbg-gray-100">
                                          <th className="px-2 py-2 border border-gray-400">
                                              Id
                                          </th>
                                          <th className="px-2 py-2 border border-gray-400">
                                              Nombre de Usuario
                                          </th>
                                          <th className="px-2 py-2 border border-gray-400">
                                              Correo Electronico
                                          </th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {props.users.map((users, i) => (
                                          <tr key={users.id}>
                                              <td className="px-2 py-2 border border-gray-400">
                                                  {i + 1}
                                              </td>
                                              <td className="px-2 py-2 border border-gray-400">
                                                  {users.full_name}
                                              </td>
                                              <td className="px-2 py-2 border border-gray-400">
                                                  {users.user_email}
                                              </td>
                                          </tr>
                                      ))}
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
