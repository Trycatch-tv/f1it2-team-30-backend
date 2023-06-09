import React from "react";
import { Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Inicio(props) {
    return (
        <>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={
                    <h2 className="font-semibold text-2xl text-gray-800 dark:text-[#404750] leading-tight">
                        Lista de Categorias
                    </h2>
                }
            >
                <Head title="Categorias" />

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <h1>Lista de Categorias y subcategorias</h1>{" "}
                                <br />
                                <table className="border table-auto gray-400">
                                    <thead>
                                        <tr className="bbg-gray-100">
                                            <th className="px-2 py-2 border border-gray-400">
                                                Id
                                            </th>
                                            <th className="px-2 py-2 border border-gray-400">
                                                Nombre de categoría
                                            </th>
                                            <th className="px-2 py-2 border border-gray-400">
                                                Fecha de creación
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.categories.map(
                                            (categories, i) => (
                                                <tr key={categories.id}>
                                                    <td className="px-2 py-2 border border-gray-400">
                                                        {i + 1}
                                                    </td>
                                                    <td className="px-2 py-2 border border-gray-400">
                                                        {
                                                            categories.category_name
                                                        }
                                                    </td>
                                                    <td className="px-2 py-2 border border-gray-400">
                                                        {categories.created_at}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>

                                <br />
                                <br />
 
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
