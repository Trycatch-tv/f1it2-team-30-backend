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
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-900">
                        Lista de Productos
                    </h2>
                }
            >
                <Head title="Products" />

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                            <PrimaryButton>
                                <i className="fa-solid fa-plus-circle"></i>
                                Añadir
                            </PrimaryButton>
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <table className="border table-auto gray-400">
                                    <thead>
                                        <tr className="bbg-gray-100">
                                            <th className="px-2 py-2">SKU</th>
                                            <th className="px-2 py-2">
                                                Producto
                                            </th>
                                            <th className="px-2 py-2">
                                                Presentacion
                                            </th>
                                            <th className="px-2 py-2">Marca</th>
                                            <th className="px-2 py-2">
                                                Precio unitatio
                                            </th>
                                            <th className="px-2 py-2">Stock</th>
                                            <th className="px-2 py-2">Lote</th>
                                            <th className="px-2 py-2">
                                                Caducidad
                                            </th>
                                            <th className="px-2 py-2">
                                                Fecha de compra
                                            </th>
                                            <th className="px-2 py-2">
                                                Categoria
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
