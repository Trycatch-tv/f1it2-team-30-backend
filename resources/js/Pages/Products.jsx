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
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Lista de Productos
                    </h2>
                }
            >
                <Head title="Products" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <PrimaryButton>
                                <i className="fa-solid fa-plus-circle"></i>
                                Añadir
                            </PrimaryButton>
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                List of Products ...
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white grid v-scree place-items-center py-6">
                    <table className="table-auto border border gray-400">
                        <thead>
                            <tr className="bbg-gray-100">""
                                <th className="px-2 py-2">SKU</th>
                                <th className="px-2 py-2">Producto</th>
                                <th className="px-2 py-2">Presentacion</th>
                                <th className="px-2 py-2">Marca</th>
                                <th className="px-2 py-2">Precio unitatio</th>
                                <th className="px-2 py-2">Stock</th>
                                <th className="px-2 py-2">Lote</th>
                                <th className="px-2 py-2">Caducidad</th>
                                <th className="px-2 py-2">Fecha de compra</th>
                                <th className="px-2 py-2">Categoria</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
